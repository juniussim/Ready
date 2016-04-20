import {Component} from 'angular2/core';

@Component({
  selector: "chat-app",
  template: `
    <div class="container">
      <h1>{{title}} <span id="status" class="label label-default">loading</span></h1>
    </div>
  `
})

export class AppComponent {
  title: string = "Angular 2 Chat";
}
