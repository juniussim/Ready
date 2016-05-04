import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'instructor-class-name',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>InstructorClassName Component</h1>
    <input type="text" [(ngModel)]="inputValue" placeholder="Enter Your Class Name" autocomplete="off" required autofocus />
    <button [disabled]="!inputValue" (click)="submitClassName(inputValue)">LET'S GO</button>
  `,
})

export class InstructorClassNameComponent {
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
  // end of constructor
  }
  submitClassName(className){
    this._classroomService.submitClassName(className);
    //THIS GUY NEED TO FINISH AFTER SECRETCODE IN CLASSROOM.SERVICE RUNS
    // this._router.navigate(['Instructor-dashboard']);
  }
}
