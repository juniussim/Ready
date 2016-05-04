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
  <h1>{{name}}</h1>
  <h4>Secret Code: {{secretCode}}</h4>
  <button (click)="areYouReady()">Are You Ready?</button>
  <button (click)="closeRoom()">Close Room</button>
  `
  // directives: [InstructorTrafficComponent],
})

export class InstructorDashboardComponent {
  name: string;
  secretCode: string;
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
    var room = this._classroomService.getRoom()
    this.secretCode = room.secretCode;
    this.name = room.name;
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

// anything that insides the constructor gets done first
// followed by ngOnInit
// so best practice to leave out the heavy duty stuff outside the constructor and in the Init
