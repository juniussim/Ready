// Import all of our dependencies
import {Injectable} from 'angular2/core';
import {Server} from './server';

// Define the interfaces for the data types we are working with.
export interface Server {
  loading: boolean,   //has the service loaded
  connected: boolean, //has a socket connection established
  joined: boolean,    //has the user joined the chat
  online: string      //names of users currently in the chat
}
export interface User {
  name: string        //the name of the user
} 
export interface Message {
  isStatus: boolean,  //is this a status message or a user message
  isOwn: boolean,     //is this message created by the current user
  user: string,       //name of the user this message belongs to
  message: string     //the actual text of the message
}

// Use the @Injectable Decorator to define the following class as a injectable service 
@Injectable()
export class ChatService {
  //CLASS PROPERTIES
  socket;
  const server:Server = {
    loading: true,
    connected: false,
    joined: false,
    online: ""
  }
  const user: User = { name: "Anon" };
  const messages : Message[] = [];

  //property accessor functions
  getServer(){
    return this.server;
  }
  getMessages(){
    return this.messages;
  }
  
  //CLASS METHODS
  constructor() {
    //connect the socket.io client to our webserver (assuming it's running on the same port)
    this.socket = io(window.location.host); 

    var self = this;
    // ADD SOCKET EVENT LISTENERS
    //handle connectting to and disconnecting from the chat server
    this.socket.on("connect", () => {
      console.log("Connected to Chat Socket");
      this.server.loading = false;
      this.server.connected = true;
    });
    this.socket.on("disconnect", () => {
      console.log("Disconnected from Chat Socket");
      this.server.connected = false;
      this.server.joined = false;
      //set array length to 0 to empty the array of past messages
      this.messages.length = 0; 
    });

    //welcome message received from the server
    this.socket.on("welcome", (msg) => {
      console.log("Received welcome message: ", msg);
      this.server.joined = true;
      //use unshift to add new messages to the front of the array and they can be displayed in order
      this.messages.unshift({
        isStatus: true,
        isOwn: false,
        user: "",
        message: msg
      });
    });

    //chat message from another user
    this.socket.on("chat", (msg) => {
      console.log("Received message: ", msg);
      this.messages.unshift({
        isStatus: false,
        isOwn: false,
        user: msg.user.name,
        message: msg.message
      });
    });

    //message received that new user has joined the chat
    this.socket.on("joined", (user) => {
      console.log(user.name + " joined the chat.");
      this.messages.unshift({
        isStatus: true,
        isOwn: false,
        user: user.name,
        message: ` ${user.name} joined the chat.`
      });
    });

    //handle leaving message
    this.socket.on("left", (user) => {
      console.log(user.name + " left the chat.");
      this.messages.unshift({
        isStatus: true,
        isOwn: false,
        user: user.name,
        message: ` ${user.name} left the chat.`
      });
    });

    //keep track of who is online
    this.socket.on("online", (connections) => {
      console.log("Connections: ", connections);
      this.server.online = "";
      for (var i=0; i< connections.length; ++i){
        if ( connections[i].user ) {
          if ( i > 0 ) {
            if ( i == connections.length -1 ) this.server.online += " and ";
            else this.server.online += ", ";
          }
          this.server.online += connections[i].user.name;
        }
      }
    });
  }

  //handle form submission for joining the chat
  joinChat(name){
    console.log("Joining chat with name: ", name);

    this.user = { name: name }
    this.socket.emit("join", this.user );
  });
  
  //handle form submission for sending a chat message 
  sendMessage(message) {
    console.log("Sending message: ", message);
    this.socket.emit("chat", message );
    //add user's own message to the message array
    this.messages.unshift({
      isStatus: false,
      isOwn: true,
      user: this.user.name,
      message: message
    });
  }
}
