import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";


@Component({
  selector: 'readyMenu',
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
  styles: [`
    .chicken {

    }
  `],
  template: `
    <menu title="Angular2" class="ui fluid one item  menu navPanel">
      <a class="item navHeader">Ready</a>
    </menu>
    <div class="flexBody">
      <button (click)="joinClass()" class="ui  button wideButton">Join Class</button>
      <p class="">OR IF YOU'RE THE INSTRUCTOR OF A CLASS START A CLASS WITH THE BUTTON BELOW</p>
      <button (click)="createClass()" class="ui  button wideButton">Create Class</button>
    </div>
  `,
})

export class MenuComponent {
  constructor(
    private _router: Router,
    private _classroomService: ClassroomService
  ){
  // end of constructor
  }
  joinClass(){
    this._router.navigate(['Student-profile']);
  }
  createClass(){
    this._router.navigate(['Instructor-class-name']);
  }
}
