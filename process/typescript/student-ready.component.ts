import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-ready',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentReady Component</h1>
  `,
})

export class StudentReadyComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
