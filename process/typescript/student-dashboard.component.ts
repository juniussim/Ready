import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { StudentTrafficComponent } from './student-traffic.component'

// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-dashboard',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentDashboard Component</h1>
  <student-traffic></student-traffic>
  `,
  directives: [StudentTrafficComponent],
})

export class StudentDashboardComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
