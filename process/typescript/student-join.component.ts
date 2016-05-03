import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-join',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentJoin Component</h1>
  `,
})

export class StudentJoinComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
