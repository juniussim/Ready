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
      <a class="item">Ready</a>
    </menu>
    <div class="flexBody">
      <button (click)="joinClass()" class="ui  button wideButton">Join Class</button>
      <button (click)="createClass()" class="ui  button wideButton">Create Class</button>
    </div>


    <div class="ui animated button" tabindex="0">
  <div class="visible content">Next</div>
  <div class="hidden content">
    <i class="right arrow icon"></i>
  </div>
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
