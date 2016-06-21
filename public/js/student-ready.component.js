System.register(['angular2/core', 'angular2/router', './timer.component', './classroom.service'], function(exports_1, context_1) {
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
    var core_1, router_1, timer_component_1, classroom_service_1;
    var StudentReadyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (timer_component_1_1) {
                timer_component_1 = timer_component_1_1;
            },
            function (classroom_service_1_1) {
                classroom_service_1 = classroom_service_1_1;
            }],
        execute: function() {
            StudentReadyComponent = (function () {
                function StudentReadyComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    this.studentConnections = this._classroomService.getStudentConnections();
                    this.totalNumberOfReadyStudents = this._classroomService.getTotalNumberOfReadyStudents();
                    this.isStudentReady = this._classroomService.getIsStudentReady();
                    // end of constructor
                }
                StudentReadyComponent.prototype.studentReady = function () {
                    this._classroomService.studentReady();
                };
                StudentReadyComponent.prototype.studentNotReady = function () {
                    this._classroomService.studentNotReady();
                };
                StudentReadyComponent = __decorate([
                    core_1.Component({
                        selector: 'student-ready',
                        styles: ["\n     h1 {\n      font-size: 4em;\n    }\n    #sinceStart {\n      margin-top: -0.5em !important;\n   }\n   #imReadyButton{\n     background-color: #83c441 !important;\n   }\n   #iNeedMoreTimeButton{\n     background-color: #c44183 !important;\n   }\n    progress progress::-webkit-progress-bar progress::-webkit-progress-value progress::-moz-progress-bar {\n     -webkit-appearance: none !important;\n     height: 20px;\n     border-radius: 10px !important;\n     width: 200px;\n     margin-top: -10px !important;\n     margin-bottom: 10px !important;\n     background: #c44183 !important;\n   }\n  "],
                        template: "\n  <menu title=\"Angular2\" class=\"ui fluid one item  menu navPanel\">\n    <a class=\"item navHeader\">ARE YOU READY?</a>\n  </menu>\n\n  <div class=\"contentBody\">\n    <h1>{{totalNumberOfReadyStudents.number}} / {{studentConnections.number}}</h1>\n    <progress value={{totalNumberOfReadyStudents.number}} max={{studentConnections.number}}></progress>\n    <p class=\"paragraphText ui\">STUDENTS ARE READY</p>\n    <br>\n    <timer>00:00</timer>\n    <p>SINCE START</p>\n    <br>\n    <div [ngSwitch]=\"isStudentReady.status\">\n        <button *ngSwitchWhen=\"false\" class=\"ui  button wideButton\" id=\"imReadyButton\" (click)=\"studentReady()\">I'm ready</button>\n        <button *ngSwitchWhen=\"true\" class=\"ui  button wideButton\" id=\"iNeedMoreTimeButton\" (click)=\"studentNotReady()\">Actually, I need more time</button>\n        <p *ngSwitchWhen=\"true\" class=\"paragraphText ui\">WAITING FOR TEACHER TO CONTINUE CLASS</p>\n    </div>\n  </div>\n  ",
                        directives: [timer_component_1.TimerComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], StudentReadyComponent);
                return StudentReadyComponent;
            }());
            exports_1("StudentReadyComponent", StudentReadyComponent);
        }
    }
});

//# sourceMappingURL=student-ready.component.js.map
