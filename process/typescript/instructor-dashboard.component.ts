import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { ClassroomService } from './classroom.service';
// import { InstructorTrafficComponent } from './instructor-traffic.component';

@Component({
  selector: 'instructor-dashboard',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>InstructorDashboard Component</h1>
  <h4>{{secretCode}}</h4>
  <button (click)="areYouReady()">Are You Ready?</button>
  <button (click)="closeRoom()">Close Room</button>
  `
  // directives: [InstructorTrafficComponent],
})

export class InstructorDashboardComponent {
  secretCode: string;
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
    var room = this._classroomService.getRoom()
    this.secretCode = room.secretCode;
  // end of constructor
  }
  areYouReady(){
    this._router.navigate(['Instructor-ready']);
  }
  closeRoom(){
    this._router.navigate(['Menu']);
  }
  // end of class
}
