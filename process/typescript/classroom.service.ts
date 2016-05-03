// Import all of our dependencies
import {Injectable} from 'angular2/core';

// Use the @Injectable Decorator to define the following class as a injectable service
@Injectable()
export class ClassroomService {
  socket;
  constructor() {
    //connect the socket.io client to our webserver (assuming it's running on the same port)
    this.socket = io(window.location.host);

    // var self = this;
    // // ADD SOCKET EVENT LISTENERS
    // //handle connectting to and disconnecting from the chat server
    this.socket.on("connect", () => {
      console.log("Connected to Chat Socket");
    });
    // this.socket.on("disconnect", () => {
    //   console.log("Disconnected from Chat Socket");
    //   this.server.connected = false;
    //   this.server.joined = false;
    //   //set array length to 0 to empty the array of past messages
    //   this.messages.length = 0;
    // });
  }
  //CLASS PROPERTIES
  // const server:Server = {
  //   loading: true,
  //   connected: false,
  //   joined: false,
  //   online: ""
  // }
  //property accessor functions
  // getServer(){
  //   return this.server;
  // }
  // getMessages(){
  //   return this.messages;
  // }
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


// Menu Component

// Instructor Create Component
submitClassName(className){
  console.log("My class name is: ", className);
  this.socket.emit("submitClassName", className );
}


// End of Export ClassRoom Service
}
