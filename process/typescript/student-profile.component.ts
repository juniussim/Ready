import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-profile',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentProfile Component</h1>
  <input type="text" [(ngModel)]="inputValue" placeholder="Enter Your Name" autocomplete="off" required autofocus />
  <button [disabled]="!inputValue" (click)="submitProfileName(inputValue)">CONTINUE</button>
  `,
})

export class StudentProfileComponent {
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){

  // end of constructor
  }
  submitProfileName(profileName){
    this._classroomService.submitProfileName(profileName);
    this._router.navigate(['Student-join']);
  }
}
