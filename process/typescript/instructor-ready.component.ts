import { Component, OnInit, OnChanges } from 'angular2/core';
import { Router } from 'angular2/router';

import { TimerComponent } from './timer.component'

import { ClassroomService } from './classroom.service';
import { StudentConnections, TotalNumberOfReadyStudents } from './interface';

@Component({
  selector: 'instructor-ready',
  styles: [`
    h1 {
      font-size: 4em;
    }
    #sinceStart {
      margin-top: -0.5em !important;
   }
  `],
  template: `
  <menu title="Angular2" class="ui fluid one item  menu navPanel">
    <a class="item navHeader">ARE YOU READY?</a>
  </menu>

  <div class="contentBody">
    <h1>{{totalNumberOfReadyStudents.number}} / {{studentConnections.number}}</h1>
    <p class="paragraphText ui">STUDENTS ARE READY</p>
    <br>
    <timer>00:00</timer>
    <p id="sinceStart">SINCE START</p>
    <br>
    <button (click)="instructorEndsReadySession()" class="ui  button wideButton">Continue with lesson</button>
  </div>
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
