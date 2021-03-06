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
    var InstructorReadyComponent;
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
            InstructorReadyComponent = (function () {
                function InstructorReadyComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    this.studentConnections = this._classroomService.getStudentConnections();
                    this.totalNumberOfReadyStudents = this._classroomService.getTotalNumberOfReadyStudents();
                    // end of constructor
                }
                InstructorReadyComponent.prototype.ngOnInit = function () {
                    //initialize PLOTLY.JS
                };
                InstructorReadyComponent.prototype.instructorEndsReadySession = function () {
                    this._router.navigate(['Instructor-dashboard']);
                    this.totalNumberOfReadyStudents.number = 0;
                    this._classroomService.instructorEndsReadySession();
                    //JUNIUS THIS IS WHAT I DID, HAVENT TEST THOUGH:
                    // redirect instructor to instructor dashboard
                    //resets total ready students
                    //emits instructorEndsReadySession
                    //server listens for instructorEndsReadySession, broadcasts to room: studentsEndReadySession
                    //students on studentsEndReadySession, redirect to student dashboard, reset student ready status to default/false
                    //update total ready students (need to send to server?)
                };
                InstructorReadyComponent = __decorate([
                    core_1.Component({
                        selector: 'instructor-ready',
                        styles: ["\n    h1 {\n      font-size: 4em;\n      margin-bottom: 8px;\n    }\n    #studentsAreReady{\n      margin-top: 10px;\n    }\n    #sinceStart {\n      margin-top: -0.5em !important;\n   }\n   #imReadyButton{\n     background-color: #83c441 !important;\n   }\n   #iNeedMoreTimeButton{\n     background-color: #c44183 !important;\n   }\n   progress[value] {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 300px;\n    height: 1.5em;\n    border-radius: 5px;\n    background-color: #bdbdbd;\n  }\n   progress::-webkit-progress-bar {\n     width: 300px;\n     height: 1.5em;\n     background-color: #bdbdbd;\n     border-radius: 5px;\n   }\n   progress::-webkit-progress-value {\n     width: 300px;\n     height: 1.5em;\n     border-radius: 5px;\n     background-color: #83c441 !important;\n   }\n  "],
                        template: "\n  <menu title=\"Angular2\" class=\"ui fluid one item  menu navPanel\">\n    <a class=\"item navHeader\">ARE YOU READY?</a>\n  </menu>\n\n  <div class=\"contentBody\">\n    <h1>{{totalNumberOfReadyStudents.number}} / {{studentConnections.number}}</h1>\n    <progress value={{totalNumberOfReadyStudents.number}} max={{studentConnections.number}}></progress>\n    <p class=\"paragraphText ui\">STUDENTS ARE READY</p>\n    <br>\n    <timer>00:00</timer>\n    <p id=\"sinceStart\">SINCE START</p>\n    <br>\n    <button (click)=\"instructorEndsReadySession()\" class=\"ui  button wideButton\">Continue with lesson</button>\n  </div>\n  ",
                        directives: [timer_component_1.TimerComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], InstructorReadyComponent);
                return InstructorReadyComponent;
            }());
            exports_1("InstructorReadyComponent", InstructorReadyComponent);
        }
    }
});

//# sourceMappingURL=instructor-ready.component.js.map
