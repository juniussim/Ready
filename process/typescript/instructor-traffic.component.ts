import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'instructor-traffic',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>InstructorTraffic Component</h1>
  `,
})

export class InstructorTrafficComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
