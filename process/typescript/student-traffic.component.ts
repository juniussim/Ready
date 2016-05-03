import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-traffic',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentTraffic Component</h1>
  `,
})

export class StudentTrafficComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
