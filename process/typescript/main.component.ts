// Import all of our dependencies
import {Component} from 'angular2/core';
import {FormComponent} from './form.component';
import {ChatService, Server} from './chat.service';

// Use the @Component Decorator to define the following class as a component and provide the meta data including the view 
@Component({
  selector: "main-chat",
  directives: [FormComponent],
  template: `
    <main class="panel panel-default">
      <div class="panel-heading">
        <chat-form [isJoinForm]=false ></chat-form>
      </div>
      <section class="panel-body">
        <div class="text-center"><small id="connected" *ngIf="server">{{server.online}}</small></div>
        <hr>
        <div id="messages">
          <div *ngFor="#msg of messages" [class.text-center]="msg.isStatus" >
            <strong *ngIf="msg.isStatus">{{msg.message}}</strong>
            <div *ngIf="!msg.isStatus" class="alert" [class.alert-success]="!msg.isOwn" [class.alert-info]="msg.isOwn" [class.text-right]="msg.isOwn">
              <span *ngIf="msg.isOwn">{{msg.message}}</span>
              <span *ngIf="!msg.isOwn"><strong>{{msg.user}}:</strong> {{msg.message}}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
})

export class MainComponent {
  //CLASS PROPERTIES
  server : Server;
  messages : Messages[];

  //CLASS METHODS
  constructor(private _chatService: ChatService) {
    //once created - get reference to the server and messages array from the chatService
    this.server = this._chatService.getServer();
    this.messages = this._chatService.getMessages();
  }
}