import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-profile',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentProfile Component</h1>
  `,
})

export class StudentProfileComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
