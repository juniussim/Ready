import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';
import { StudentConnections } from './interface';
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
  <h4>{{studentConnections.number}} students here</h4>
  <button (click)="areYouReady()">Are You Ready?</button>
  <button (click)="closeRoom()">Close Room</button>
  `
  // directives: [InstructorTrafficComponent],
})

export class InstructorDashboardComponent {
  name: string;
  secretCode: string;
  studentConnections: StudentConnections;
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
    var room = this._classroomService.getRoom()
    this.secretCode = room.secretCode;
    this.name = room.name;
    this.studentConnections = this._classroomService.getStudentConnections()
  // end of constructor
  }
  areYouReady(){
    this._router.navigate(['Instructor-ready']);
    this._classroomService.instructorCallReady()
    // use the classroomService to emit to the server that we are starting are u ready
    // use the server to emit to all those in the room (excluding instructor) - use broadcast
    // and in the service (listen for an emit)
    // in the emit (reroute the student into student ready)
  }
  closeRoom(){
    this._router.navigate(['Menu']);
    this._classroomService.closeRoom()
  }
  // end of class
}

// anything that insides the constructor gets done first
// followed by ngOnInit
// so best practice to leave out the heavy duty stuff outside the constructor and in the Init
