import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

import { TimerComponent } from './timer.component'

import { ClassroomService } from './classroom.service';
import { StudentConnections, TotalNumberOfReadyStudents, IsStudentReady } from './interface';

@Component({
  selector: 'student-ready',
  styles: [`
    h1 {
      font-size: 4em;
      margin-bottom: 8px;
    }
    #studentsAreReady{
      margin-top: 10px;
    }
    #sinceStart {
      margin-top: -0.5em !important;
   }
   #imReadyButton{
     background-color: #83c441 !important;
   }
   #iNeedMoreTimeButton{
     background-color: #c44183 !important;
   }
   progress[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 300px;
    height: 1.5em;
    border-radius: 5px;
    background-color: #bdbdbd;
   }
   progress::-webkit-progress-bar {
     width: 300px;
     height: 1.5em;
     background-color: #bdbdbd;
     border-radius: 5px;
   }
   progress::-webkit-progress-value {
     width: 300px;
     height: 1.5em;
     border-radius: 5px;
     background-color: #83c441 !important;
   }
  `],
  template: `
  <menu title="Angular2" class="ui fluid one item  menu navPanel">
    <a class="item navHeader">ARE YOU READY?</a>
  </menu>

  <div class="contentBody">
    <h1>{{totalNumberOfReadyStudents.number}} / {{studentConnections.number}}</h1>
    <progress value={{totalNumberOfReadyStudents.number}} max={{studentConnections.number}}></progress>
    <p class="paragraphText ui" id="studentsAreReady">STUDENTS ARE READY</p>
    <br>
    <timer>00:00</timer>
    <p>SINCE START</p>
    <br>
    <div [ngSwitch]="isStudentReady.status">
        <button *ngSwitchWhen="false" class="ui  button wideButton" id="imReadyButton" (click)="studentReady()">I'm ready</button>
        <button *ngSwitchWhen="true" class="ui  button wideButton" id="iNeedMoreTimeButton" (click)="studentNotReady()">Actually, I need more time</button>
        <p *ngSwitchWhen="true" class="paragraphText ui">WAITING FOR TEACHER TO CONTINUE CLASS</p>
    </div>
  </div>
  `,
  directives: [TimerComponent]
})

export class StudentReadyComponent {
  studentConnections: StudentConnections;
  totalNumberOfReadyStudents: TotalNumberOfReadyStudents;
  isStudentReady: IsStudentReady;
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
    this.studentConnections = this._classroomService.getStudentConnections();
    this.totalNumberOfReadyStudents = this._classroomService.getTotalNumberOfReadyStudents();
    this.isStudentReady = this._classroomService.getIsStudentReady();
  // end of constructor
  }
  studentReady(){
    this._classroomService.studentReady();
  }
  studentNotReady(){
    this._classroomService.studentNotReady();
  }
  //when student presses btn studentReady(), socket emits studentReady()
  //server listens for studentReady() event:
  //connection ready = true; update instructor & student dashboard, no of ready peeps
  //student button to not

}
