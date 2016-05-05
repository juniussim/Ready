import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { StudentTrafficComponent } from './student-traffic.component'
import { ClassroomService } from './classroom.service';
import { StudentConnections, Room } from './interface';

@Component({
  selector: 'student-dashboard',
  styles: [`
     #studentSecretCode {
       margin-top: -0.1em;
       margin-bottom: 0.7em;
       background-color: white;
       border: 2px solid black;
       font-size: 1.5em !important;
       padding: 0.3em;
    }
  `],
  template: `
  <menu title="Angular2" class="ui fluid one item  menu navPanel">
    <a class="item navHeader">{{room.name}}</a>
  </menu>

  <div class="contentBody">
     <br>
     <p class="paragraphText ui">YOUR CLASMATES CAN JOIN THE ROOM USING THIS CODE:</p>
     <h1 id="studentSecretCode">{{room.secretCode}}</h1>
     <h1>STUDENTS IN ROOM:  {{studentConnections.number}}</h1>
     <br>
     <p class="paragraphText ui">WAITING FOR YOUR TEACHER'S READY PING</p>
     <br>
    <button (click)="leaveClass()" class="ui  button wideButton">Leave Room</button>
  </div>

  `,
  directives: [StudentTrafficComponent],
})

export class StudentDashboardComponent {
   room: Room;
   name: string;
   secretCode: string;
   studentConnections: StudentConnections;
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
     this.room = this._classroomService.getRoom()
     this.studentConnections = this._classroomService.getStudentConnections()
  // end of constructor
  }
  leaveClass(){
    this._router.navigate(['Menu']);
    this._classroomService.leaveClass()
    // redirect the student back to menu
    // emit to server to inform server that the student is no longer in the room/class
    // this would reduce the totalNumberOfStudentConnections
    // By removing secretCode from the connection
  }
}
