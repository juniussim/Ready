// Import all of our dependencies
import {Injectable} from 'angular2/core';

// // Define the interfaces for the data types we are working with.
// export interface Server {
//   loading: boolean,   //has the service loaded
//   connected: boolean, //has a socket connection established
//   joined: boolean,    //has the user joined the chat
//   online: string      //names of users currently in the chat
// }

export interface AppRoutes {
  intro: boolean
}

// Use the @Injectable Decorator to define the following class as a injectable service
@Injectable()
export class ClassroomService {
  //CLASS PROPERTIES
  // const server:Server = {
  //   loading: true,
  //   connected: false,
  //   joined: false,
  //   online: ""
  // }
  appRoutes: AppRoutes = {
    intro: true
  }

  //property accessor functions
  // getServer(){
  //   return this.server;
  // }
  // getMessages(){
  //   return this.messages;
  // }
  getRoutes(){
    return this.appRoutes;
  }

  //CLASS METHODS
  constructor() {
    //connect the socket.io client to our webserver (assuming it's running on the same port)
    // this.socket = io(window.location.host);
    //
    // var self = this;
    // // ADD SOCKET EVENT LISTENERS
    // //handle connectting to and disconnecting from the chat server
    // this.socket.on("connect", () => {
    //   console.log("Connected to Chat Socket");
    //   this.server.loading = false;
    //   this.server.connected = true;
    // });
    // this.socket.on("disconnect", () => {
    //   console.log("Disconnected from Chat Socket");
    //   this.server.connected = false;
    //   this.server.joined = false;
    //   //set array length to 0 to empty the array of past messages
    //   this.messages.length = 0;
    // });

  }

  changeRoutes(){
    this.appRoutes.intro = false;
    console.log(this.appRoutes)
  }
  //handle form submission for joining the chat
  // joinChat(name){
  //   console.log("Joining chat with name: ", name);
  //
  //   this.user = { name: name }
  //   this.socket.emit("join", this.user );
  // });
  //
  // //handle form submission for sending a chat message
  // sendMessage(message) {
  //   console.log("Sending message: ", message);
  //   this.socket.emit("chat", message );
  //   //add user's own message to the message array
  //   this.messages.unshift({
  //     isStatus: false,
  //     isOwn: true,
  //     user: this.user.name,
  //     message: message
  //   });
  // }
}
