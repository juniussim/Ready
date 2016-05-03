import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'instructor-ready',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>InstructorReady Component</h1>
  `,
})

export class InstructorReadyComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
