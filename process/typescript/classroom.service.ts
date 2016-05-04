// Import all of our dependencies
import { Injectable } from 'angular2/core';
import { Router } from 'angular2/router';
import { Room } from './interface';
// export interface Room {
//   name: string,
//   secretCode: string
// }

// Use the @Injectable Decorator to define the following class as a injectable service
@Injectable()
export class ClassroomService {
  socket;
  room: Room

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

    // // ADD SOCKET EVENT LISTENERS
    // //handle connectting to and disconnecting from the chat server
    this.socket.on('connect', () => {
      console.log('Connected to Chat Socket');
    });
    this.socket.on('disconnect', () => {
      console.log('Disconnected from Chat Socket');
    });
    this.socket.on('secretCode', (room) => {
      console.log('Recieved Room Object:', room)
      this.room = room;
      console.log('look here', this.room)
      this._router.navigate(['Instructor-dashboard']);
    })
  }

// Menu Component

// Instructor Create Component
submitClassName(className){
  console.log("My class name is: ", className);
  this.socket.emit("submitClassName", className );
}


// End of Export ClassRoom Service
}
