import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
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

  `,
})

export class InstructorReadyComponent {
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
}
