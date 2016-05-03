import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'menu',
  styles: [`
    .chicken {
    }
  `],
  template: `
    <h1>Menu</h1>
    <button (click)="joinClass()">Join Class</button>
    <button (click)="createClass()">Create Class</button>
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
