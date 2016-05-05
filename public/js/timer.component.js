System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import { ClassroomService } from './classroom.service';
            // import { StudentConnections } from './interface';
            TimerComponent = (function () {
                function TimerComponent() {
                    // end of constructor
                }
                TimerComponent.prototype.ngOnInit = function () {
                    var startedTimer = Date.now();
                    document.getElementById("seconds").innerHTML = '00';
                    document.getElementById("minutes").innerHTML = '00';
                    function returnTimerNumber(secPassed) { return secPassed > 9 ? secPassed : "0" + secPassed; }
                    ;
                    this.timer = setInterval(goTimer, 1000);
                    function goTimer() {
                        var secPassed = Math.floor((Date.now() - startedTimer) / 1000);
                        document.getElementById("seconds").innerHTML = returnTimerNumber(secPassed % 60);
                        document.getElementById("minutes").innerHTML = returnTimerNumber(parseInt(secPassed / 60, 10));
                    }
                };
                TimerComponent.prototype.ngOnDestroy = function () {
                    clearInterval(this.timer);
                };
                TimerComponent = __decorate([
                    core_1.Component({
                        selector: 'timer',
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: '<h2><span id="minutes"></span>:<span id="seconds"></span><h2>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimerComponent);
                return TimerComponent;
            }());
            exports_1("TimerComponent", TimerComponent);
        }
    }
});

//# sourceMappingURL=timer.component.js.map
