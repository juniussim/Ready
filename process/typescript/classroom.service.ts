// Import all of our dependencies
import { Injectable } from 'angular2/core';
import { Router } from 'angular2/router';
import { Room, User, ErrorState, StudentConnections, TotalNumberOfReadyStudents } from './interface';
// export interface Room {
//   name: string,
//   secretCode: string
// }

// Use the @Injectable Decorator to define the following class as a injectable service
@Injectable()
export class ClassroomService {
  socket;
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


  constructor(
    private _router: Router
  ) {
    // ignore this silly error
    //connect the socket.io client to our webserver (assuming it's running on the same port)
    this.socket = io(window.location.host);

    // ADD SOCKET EVENT LISTENERS
    // We need this event listeners to be present the moment the component is created

    // ================================== Instructor ==================================
    this.socket.on('connect', () => {
      console.log('Connected to Chat Socket');
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from Chat Socket');
    });
    this.socket.on('createSecretCode', (room) => {
      console.log('Recieved Room Object:', room)
      this.room = room;
      this._router.navigate(['Instructor-dashboard']);
    })
    this.socket.on('newStudentConnection', (studentConnections) => {
      console.log('New student joined, total number of students: ', studentConnections)
      this.studentConnections.number = studentConnections;
    })

    // ================================== Student ==================================

    this.socket.on('secretCodeExist', (correctSecretCode) => {
        // we want to do the room entry logic here
        if (correctSecretCode) {
          this._router.navigate(['Student-dashboard']);
        } else {
          this.errorState.secretCodeError = true;
        }
        console.log('status of secretCodeError', this.errorState)
    })

    this.socket.on('startStudentReady', () => {
      this._router.navigate(['Student-ready']);
    })

    // ========================== Ready  =============================
    this.socket.on('updateStudentReady', (totalNumberOfReadyStudents) => {
      console.log("number of students are ready", totalNumberOfReadyStudents);
      this.totalNumberOfReadyStudents.number = totalNumberOfReadyStudents;
    });

    // this.socket.on('RecievedYourLovelyReadyResponse', () => {
    //   console.log("number of students are ready");
    // });

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
closeRoom(){
  console.log('Closing Room: ', this.room);
  this.socket.emit('closeRoom', this.room );
  // we don't necessarily need this, what is the best practice
  this.room = {
    name: null,
    secretCode: null,
  };
}
// use the server to emit to all those in the room (excluding instructor) - use broadcast
// and in the service (listen for an emit)
// in the emit (reroute the student into student ready)

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

// Student Ready Component
studentReady(){
  console.log("student pressed i'm ready button");
  this.socket.emit('studentReady')
}
studentNotReady(){
  // console.log('Secret Code is: ', secretCode);
  // this.socket.emit('submitSecretCode', secretCode)
}


// End of Export ClassRoom Service
}
