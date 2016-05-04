import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'student-join',
  styles: [`
    .chicken {
    }
  `],
  template: `
  <h1>StudentJoin Component</h1>
  <input type="text" [(ngModel)]="inputValue" placeholder="Enter Secret Code" autocomplete="off" required autofocus />
  <button [disabled]="!inputValue" (click)="submitSecretCode(inputValue)">LET'S GO</button>
  <div *ngIf="{{secretCodeError}}">
    <p>You can keep guessing or you can ask the instructor</p>
  </div>
  `,
})

export class StudentJoinComponent {
  secretCodeError: boolean;

  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){

  // end of constructor
  }
  submitSecretCode(secretCode){
    console.log("submit secret code")
    this._classroomService.submitSecretCode(secretCode);
    // if (this._classroomService.correctSecretCode) {
    //   this._router.navigate(['Student-dashboard']);
    // } else {
    //   // don't let them pass through
    //   // inform user that the code is wrong and ask the instructor for the code
    //   // red box focus
    // }
  }
  getSecretCodeError(){
    this.secretCodeError = this._classroomService.getSecretCodeError()
  }

}
