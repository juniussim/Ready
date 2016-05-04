// Import all of our dependencies
import { Injectable } from 'angular2/core';
import { Router } from 'angular2/router';
import { Room, User } from './interface';
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
  // correctSecretCode: boolean = false;

  getRoom() {
    // console.log('look here',this.room)
    return this.room;
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

    // ================================== Student ==================================

    this.socket.on('secretCodeExist', (correctSecretCode) => {
        // we want to do the room entry logic here
        console.log('hehrhehreh', correctSecretCode)
        if (correctSecretCode) {
          // this.correctSecretCode = true;
          console.log('I am a lamma')
          this._router.navigate(['Student-dashboard']);
        } else {
          // this.correctSecretCode = false;
        }
        console.log('status of correctSecretCode', correctSecretCode)
    })

  // end of constructor braces
  }

// Menu Component

// Instructor ClassName Component
submitClassName(className){
  console.log('My class name is: ', className);
  this.socket.emit('submitClassName', className );
}
// Instructor Dashboard Component
closeRoom(){
  console.log('Closing Room: ', this.room);
  this.socket.emit('closeRoom', this.room );
  // we don't necessarily need this, what is the best practice
  this.room = {
    name: null,
    secretCode: null,
  };
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

// End of Export ClassRoom Service
}
