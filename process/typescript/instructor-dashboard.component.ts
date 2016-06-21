import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';
import { StudentConnections } from './interface';
// import { InstructorTrafficComponent } from './instructor-traffic.component';

@Component({
  selector: 'instructor-dashboard',
  styles: [`
    #instructorSecretCode {
      margin-top: -0.1em;
      margin-bottom: 0.7em;
      background-color: white;
      border: 2px solid black;
      font-size: 2.2em !important;
      padding: 0.3em;
    }
  `],
  template: `
  <menu title="Angular2" class="ui fluid one item  menu navPanel">
    <a class="item navHeader">{{name}}</a>
  </menu>

  <div class="contentBody">
   <br>
   <p class="paragraphText ui">ASK YOUR STUDENTS TO JOIN THE ROOM USING THIS CODE:</p>
    <h1 id="instructorSecretCode">{{secretCode}}</h1>
    <h1>STUDENTS IN ROOM: {{studentConnections.number}}</h1>
   <br>
    <button (click)="areYouReady()" class="ui  button wideButton">SEND 'ARE YOU READY?'</button>
    <button (click)="closeClass()" class="ui  button wideButton">CLOSE ROOM</button>
  </div>
  `
  // directives: [InstructorTrafficComponent],
})

export class InstructorDashboardComponent {
  name: string;
  secretCode: string;
  studentConnections: StudentConnections;
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
    var room = this._classroomService.getRoom()
    this.secretCode = room.secretCode;
    this.name = room.name;
    this.studentConnections = this._classroomService.getStudentConnections()
  // end of constructor
  }
  areYouReady(){
    this._router.navigate(['Instructor-ready']);
    this._classroomService.instructorCallReady()
    // use the classroomService to emit to the server that we are starting are u ready
    // use the server to emit to all those in the room (excluding instructor) - use broadcast
    // and in the service (listen for an emit)
    // in the emit (reroute the student into student ready)
  }
  closeClass(){
    this._router.navigate(['Menu']);
    this._classroomService.closeClass()
  }
  // end of class
}

// anything that insides the constructor gets done first
// followed by ngOnInit
// so best practice to leave out the heavy duty stuff outside the constructor and in the Init
