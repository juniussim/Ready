import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

// import { InstructorTrafficComponent } from './instructor-traffic.component';

// import { ClassroomService } from './classroom.service';

@Component({
  selector: 'instructor-dashboard',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>InstructorDashboard Component</h1>
  `
  // directives: [InstructorTrafficComponent],
})

export class InstructorDashboardComponent {
  constructor(
    private _router: Router
    // private _classroomService: ClassroomService
  ){

  // end of constructor
  }
}
