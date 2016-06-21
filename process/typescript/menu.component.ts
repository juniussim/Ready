import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { ClassroomService } from './classroom.service';

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";


@Component({
  selector: 'readyMenu',
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
  styles: [`
    footer {
      position: fixed;
      bottom:0%;
      width:100%;
      height:90px;
    }
    #credits {
      font-size: 1em;
      color: grey;
      padding: 20px;
    }
  `],
  template: `
    <menu title="Angular2" class="ui fluid one item  menu navPanel">
      <a class="item navHeader">Ready</a>
    </menu>
    <div class="contentBody">
      <button (click)="joinClass()" class="ui  button wideButton">Join Class</button>
      <p class="paragraphText ui">OR IF YOU'RE THE INSTRUCTOR OF A CLASS, CREATE A CLASS</p>
      <button (click)="createClass()" class="ui  button wideButton">Create Class</button>
    </div>
    <footer>
      <p id="credits" class="paragraphText ui">Built with pride by <a href="http://www.google.com">Junius Sim</a> and <a href="http://www.gabrielle-ong.com">Gabrielle Ong</a>
      <br> using Angular2.js and Node.js</p>
    </footer>
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
