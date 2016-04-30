import {Component} from 'angular2/core';
import {ClassroomService} from './classroom.service';

@Component({
  selector: "intro",
  template: `
    <p class="introTagLine">Rails is an interactive teaching tool that anyone can use to create a better learning environment</p>
    <h3 class="introFeatureTitle"><strong>Are you ready</strong></h3>
    <p class="introFeatureDescription">Allows the instructor to easily know when students are ready without opening his damn mouth.</p>
    <div class="introButton" (click)="buttonClicked()">GOT IT</div>
  `
})
export class IntroComponent {
  appRoutes;

  buttonClicked(){
    this._classroomService.changeRoutes()
  }
  
  constructor(private _classroomService: ClassroomService) {
  }

}
