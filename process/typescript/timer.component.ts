import { Component, OnInit, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';
// import { ClassroomService } from './classroom.service';
// import { StudentConnections } from './interface';

@Component({
  selector: 'timer',
  styles: [`
    .chicken {
    }
  `],
  template: '<h2><span id="minutes"></span>:<span id="seconds"></span><h2>'
})

export class TimerComponent implements OnInit, OnDestroy{
   timer;
   constructor(
   //  private _router: Router,
   //  private _classroomService: ClassroomService
  ){
  // end of constructor
  }
   ngOnInit(){
      var startedTimer = Date.now();


      function returnTimerNumber ( secPassed ) { return secPassed > 9 ? secPassed : "0" + secPassed; };

      this.timer = setInterval( goTimer, 1000);

      function goTimer(){
         var secPassed = Math.ceil((Date.now() - startedTimer) / 1000);
         document.getElementById("seconds").innerHTML = returnTimerNumber(secPassed%60);
         document.getElementById("minutes").innerHTML = returnTimerNumber(parseInt(secPassed/60,10));
      }
   }
   ngOnDestroy(){
     clearInterval ( this.timer );
   }
}
