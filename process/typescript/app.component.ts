// Import all of our dependencies
import {Component} from 'angular2/core';
import {ClassroomService, AppRoutes} from './classroom.service';
import {IntroComponent} from './intro.component';

// import {ChatService, Server} from './chat.service';

// Use the @Component Decorator to define the following class as a component and provide the meta data including the view
@Component({
  selector: "app-component",
  directives: [IntroComponent],
  providers: [ClassroomService],
  template: `
  <div class="container">
    <div class="navPanel">
      <div class="navHeader">{{navHeader}}</div>
    </div>
    <div class="bodyDiv" [ngSwitch]="appRoutes.intro">
      <intro  *ngSwitchWhen="true" class="intro"></intro>
    </div>
    <div (click)="buttonClicked()">hello</div>
  </div>
  `
})

export class AppComponent{
  // //CLASS PROPERTIES
  navHeader: string = "Ready";
  appRoutes: AppRoutes;
  // server : Server;

  // //CLASS METHODS
  constructor(private _classroomService: ClassroomService) {
    //one component is created grab a reference to the server from the Chat Service
    this.appRoutes = this._classroomService.getRoutes();
  }
  //
  // //decide what status message should be based upon connection
  // statusMessage():string {
  //     if (!this.server.loading && this.server.connected) return "connected"
  //     if (!this.server.loading && !this.server.connected) return "disconnected"
  //     return "loading"
  // }
}
