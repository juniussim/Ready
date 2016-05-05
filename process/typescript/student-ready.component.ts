import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';
import { StudentConnections, TotalNumberOfReadyStudents, IsStudentReady } from './interface';

@Component({
  selector: 'student-ready',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentReady Component</h1>
  <h3> {{totalNumberOfReadyStudents.number}}/ {{studentConnections.number}}</h3>
  <h4>STUDENTS ARE READY</h4>
  <div [ngSwitch]="isStudentReady.status">
      <button *ngSwitchWhen="false" (click)="studentReady()">I'm ready</button>
      <button *ngSwitchWhen="true" (click)="studentNotReady()">Actually, I need more time</button>
  </div>
  `,
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
