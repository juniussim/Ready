// Import all of our dependencies
import {Component, Input} from 'angular2/core';
import {ChatService, Message, Server, User} from './chat.service';
    
// Use the @Component Decorator to define the following class as a component and provide the meta data including the view 
@Component({
  selector: "chat-form",
  template: `
    <form id="JoinForm" class="form-inline text-right">
        <fieldset [disabled]="!server.connected || isJoining">
          <input type="text" class="form-control" [(ngModel)]="inputValue" placeholder="{{placeholder()}}" autocomplete="off" required autofocus />
          <button id="sendJoin" class="btn btn-success" [disabled]="!inputValue || isJoining" (click)="buttonClicked(hero)">{{buttonLabel()}}</button>
        </fieldset>
    </form>
  `
})

export class FormComponent {
  //CLASS PROPERTIES
  
  inputValue:string;
  server : Server;
  //when a form component is specified in a template, it is passed a boolean variable to say whether it is a JoinForm or a ChatForm
  @Input() isJoinForm: boolean;

  //CLASS METHODS
  constructor(private _chatService: ChatService) {
    //once component is created grab a reference to the server from the Chat Service
    this.server = this._chatService.getServer();
  }
  
  //provide functions for deciding what text to display in the form template
  placeholder(){
    if (this.isJoinForm) return "Your Name" 
    else return "Say What?";
  }
  buttonLabel(){
    if (this.isJoinForm) return "Join" 
    else return "Send";
  }
  //handle the button click to communicate with the service
  buttonClicked(){
    // basic validation - at least one character in the input
    if ( this.inputValue.length === 0 ) return false;
    
    if (this.isJoinForm){
      this.isJoining = true;
      this._chatService.joinChat(this.inputValue);
    } else  {
      this._chatService.sendMessage(this.inputValue);
      this.inputValue = "";
    }
  }
}