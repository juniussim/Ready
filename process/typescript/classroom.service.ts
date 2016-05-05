// Import all of our dependencies
import { Injectable } from 'angular2/core';
import { Router } from 'angular2/router';
import { Room, User, ErrorState, StudentConnections, TotalNumberOfReadyStudents, IsStudentReady } from './interface';
// export interface Room {
//   name: string,
//   secretCode: string
// }

// Use the @Injectable Decorator to define the following class as a injectable service
@Injectable()
export class ClassroomService {
  socket;
  // we might be able to refactor and remove this room property since each socket connection has a secret code in the server side which can be used to find the room
  room: Room;
  user: User;
  // the reason why we use errorState as a object and not a boolean is because we want to take advantage of the reference vs copy concept
  // when we reference a (service) object in a component, we are reference the object instead of copying it
  // therefore when the (service) object changes, the component property immediately changes and the one way binding in student join component is immediately reflected.
  errorState: ErrorState = {
    secretCodeError: false
  };

  studentConnections: StudentConnections = {
    number: 0
  }

  totalNumberOfReadyStudents: TotalNumberOfReadyStudents = {
    number: 0
  }

  isStudentReady: IsStudentReady = {
    status: false
  }
  // ================================== Accessor (Getter) Functions ==================================
  // ================================== Instructor ==================================

  getRoom() {
    // console.log('look here',this.room)
    return this.room;
  }

  getStudentConnections() {
    return this.studentConnections;
  }

  // ================================== Students ==================================

  getErrorState() {
    console.log(this.errorState)
    return this.errorState;
  }

  // ================================== Ready ==================================

  getTotalNumberOfReadyStudents(){
    return this.totalNumberOfReadyStudents;
  }

  getIsStudentReady(){
    return this.isStudentReady;
  }


  constructor(
    private _router: Router
  ) {
    // ignore this silly error
    //connect the socket.io client to our webserver (assuming it's running on the same port)
    this.socket = io(window.location.host);

    // ADD SOCKET EVENT LISTENERS
    // We need this event listeners to be present the moment the component is created

    // ================================== Both Instructor & Students ==================================

    this.socket.on('connect', () => {
      console.log('Connected to Chat Socket');
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from Chat Socket');
      // just in case navigation
      this._router.navigate(['menu']);
    });

    // ================================== Instructor ==================================

    this.socket.on('createSecretCode', (room) => {
      console.log('Recieved Room Object:', room)
      this.room = room;
      this._router.navigate(['Instructor-dashboard']);
    })
    this.socket.on('updateNumberOfRoomConnections', (studentConnections) => {
      console.log('Room connections changed, total number of students: ', studentConnections)
      this.studentConnections.number = studentConnections;
    })

    // ================================== Student ==================================

    this.socket.on('secretCodeExist', (correctSecretCodeWithObject) => {
        // we want to do the room entry logic here
        if (correctSecretCodeWithObject.secretCodeExist) {
          this._router.navigate(['Student-dashboard']);
          this.errorState.secretCodeError = false;
          // =>> added this shit in when we were sleepy
          this.room = correctSecretCodeWithObject.room;
        } else {
          this.errorState.secretCodeError = true;
        }
        console.log('status of secretCodeError', this.errorState)
    })

    this.socket.on('startStudentReady', () => {
      this._router.navigate(['Student-ready']);
    })

    this.socket.on('studentsCloseClass', () => {
      this._router.navigate(['Menu']);
      // when you close the class, you want to set the ready status back to false
      this.isStudentReady.status = false;
      this.totalNumberOfReadyStudents.number = 0;
      // trying an alternative solution first
      // this.studentConnections.number = 0
    })

    // ========================== Ready  =============================
    this.socket.on('updateStudentReady', (totalNumberOfReadyStudents) => {
      console.log("number of students are ready", totalNumberOfReadyStudents);
      this.totalNumberOfReadyStudents.number = totalNumberOfReadyStudents;
    });

    this.socket.on('RecievedYourLovelyReadyResponse', () => {
      console.log('We received your lovely ready response my young padawan');
      this.isStudentReady.status = true;
    });

    this.socket.on('RecievedYourLovelyNotReadyResponse', () => {
      console.log('We received your lovely not ready response my young padawan');
      this.isStudentReady.status = false;
    });

    this.socket.on('studentsEndReadySession', () => {
      this._router.navigate(['Student-dashboard']);
      this.isStudentReady.status = false;
      this.totalNumberOfReadyStudents.number = 0;
    })

    //update total ready students (need to send to server?)


  // end of constructor braces
  }

// Menu Component

// Instructor ClassName Component
submitClassName(className){
  console.log('My class name is: ', className);
  this.socket.emit('submitClassName', className );
}
// Instructor Dashboard Component
instructorCallReady(){
  console.log("instructor pressed ARE YOU READY")
  this.socket.emit('instructorCallReady')
}
closeClass(){
  console.log('Closing Class: ');
  this.socket.emit('closeClass');
  // server sockets receive closeroom and then emits out to students to close their room as well

  // considering not storing anything on the client side and removing room
  // we don't necessarily need this because when someone joins the room in future, he would create a new room and the existing room stored on the client side will be overwritten
  // this.room = {
  //   name: null,
  //   secretCode: null,
  // };
}

// Instructor Ready Component
instructorEndsReadySession(){
  this.socket.emit('instructorEndsReadySession')
}

// Student Profile Component
submitProfileName(profileName){
  console.log('My profile name is: ', profileName);
  // console.log(this.user);
  this.user = {name: profileName};
  this.socket.emit('submitProfileName', profileName);
}

// Student Join Component
submitSecretCode(secretCode){
  console.log('Secret Code is: ', secretCode);
  this.socket.emit('submitSecretCode', secretCode)
}

// Student Dashboard Component
leaveClass(){
  console.log("I'm leaving the class");
  this.socket.emit('studentLeaveClass')
}


// Student Ready Component
studentReady(){
  console.log("student pressed i'm ready button");
  this.socket.emit('studentReady')
}
studentNotReady(){
  console.log("student changed to not ready");
  this.socket.emit('studentNotReady')
}


// End of Export ClassRoom Service
}
