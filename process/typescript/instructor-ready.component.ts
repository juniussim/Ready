import { Component, OnInit, OnChanges } from 'angular2/core';
import { Router } from 'angular2/router';

import { TimerComponent } from './timer.component'

import { ClassroomService } from './classroom.service';
import { StudentConnections, TotalNumberOfReadyStudents } from './interface';

@Component({
  selector: 'instructor-ready',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>InstructorReady Component</h1>
  <h1>Are You Ready</h1>
  <h3> {{totalNumberOfReadyStudents.number}}/ {{studentConnections.number}}</h3>
  <h4>STUDENTS ARE READY</h4>
  <timer></timer>
  <button (click)="instructorEndsReadySession()">Continue</button>
  `,
  directives: [TimerComponent]
})

export class InstructorReadyComponent implements OnInit {
  studentConnections: StudentConnections;
  totalNumberOfReadyStudents: TotalNumberOfReadyStudents;
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
    this.studentConnections = this._classroomService.getStudentConnections();
    this.totalNumberOfReadyStudents = this._classroomService.getTotalNumberOfReadyStudents();
  // end of constructor
  }
   ngOnInit(){
      //initialize PLOTLY.JS
   }
   instructorEndsReadySession(){

    this._router.navigate(['Instructor-dashboard']);
    this.totalNumberOfReadyStudents.number = 0;
    this._classroomService.instructorEndsReadySession();
    //JUNIUS THIS IS WHAT I DID, HAVENT TEST THOUGH:

    // redirect instructor to instructor dashboard
    //resets total ready students
    //emits instructorEndsReadySession
    //server listens for instructorEndsReadySession, broadcasts to room: studentsEndReadySession
    //students on studentsEndReadySession, redirect to student dashboard, reset student ready status to default/false
    //update total ready students (need to send to server?)
  }
}
