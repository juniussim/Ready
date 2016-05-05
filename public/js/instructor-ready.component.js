System.register(['angular2/core', 'angular2/router', './classroom.service'], function(exports_1, context_1) {
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
    var core_1, router_1, classroom_service_1;
    var InstructorReadyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: "\n  <h1>InstructorReady Component</h1>\n  <h1>Are You Ready</h1>\n  <h3> {{totalNumberOfReadyStudents.number}}/ {{studentConnections.number}}</h3>\n  <h4>STUDENTS ARE READY</h4>\n  <canvas id=\"myChart\" width=\"400\" height=\"400\"></canvas>\n  <button (click)=\"instructorEndsReadySession()\">Continue</button>\n  ",
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
