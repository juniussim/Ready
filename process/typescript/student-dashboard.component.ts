import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { StudentTrafficComponent } from './student-traffic.component'
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-dashboard',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentDashboard Component</h1>
  <student-traffic></student-traffic>
  <button (click)="leaveClass()">Leave Room</button>
  `,
  directives: [StudentTrafficComponent],
})

export class StudentDashboardComponent {
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){

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
