import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";


@Component({
  selector: 'menu',
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
  styles: [`
    .chicken {

    }
  `],
  template: `
    <h1>Menu</h1>
    <sm-button (click)="joinClass()" class="normal">Join Class</sm-button>
    <sm-button (click)="createClass()" class="normal">Create Class</sm-button>
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
