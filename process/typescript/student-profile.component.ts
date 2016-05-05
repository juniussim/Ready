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
   <menu title="Angular2" class="ui fluid one item  menu navPanel">
      <a class="item navHeader">Ready</a>
   </menu>
   <div class="contentBody">
     <input type="text" [(ngModel)]="inputValue" placeholder="What's Your Name?" autocomplete="off" required autofocus />
     <button [disabled]="!inputValue" class="ui  button wideButton" (click)="submitProfileName(inputValue)">CONTINUE</button>
   </div>
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
