System.register(['angular2/core', 'angular2/router', './student-traffic.component', './classroom.service'], function(exports_1, context_1) {
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
    var core_1, router_1, student_traffic_component_1, classroom_service_1;
    var StudentDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_traffic_component_1_1) {
                student_traffic_component_1 = student_traffic_component_1_1;
            },
            function (classroom_service_1_1) {
                classroom_service_1 = classroom_service_1_1;
            }],
        execute: function() {
            StudentDashboardComponent = (function () {
                function StudentDashboardComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    this.room = this._classroomService.getRoom();
                    // end of constructor
                }
                StudentDashboardComponent.prototype.leaveClass = function () {
                    this._router.navigate(['Menu']);
                    this._classroomService.leaveClass();
                    // redirect the student back to menu
                    // emit to server to inform server that the student is no longer in the room/class
                    // this would reduce the totalNumberOfStudentConnections
                    // By removing secretCode from the connection
                };
                StudentDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'student-dashboard',
                        styles: ["\n     #studentSecretCode {\n       margin-top: -0.1em;\n       margin-bottom: 0.7em;\n       background-color: white;\n       border: 2px solid black;\n       font-size: 1.5em !important;\n       padding: 0.3em;\n    }\n  "],
                        template: "\n  <menu title=\"Angular2\" class=\"ui fluid one item  menu navPanel\">\n    <a class=\"item navHeader\">{{room.name}}</a>\n  </menu>\n\n  <div class=\"contentBody\">\n     <h1>SECRET CODE: </h1>\n     <h1 id=\"studentSecretCode\">{{room.secretCode}}</h1>\n     <p class=\"paragraphText ui\">YOUR CLASMATES CAN JOIN THE ROOM USING THIS CODE</p>\n     <br>\n     <p class=\"paragraphText ui\">WAITING FOR YOUR TEACHER'S READY PING</p>\n     <br>\n    <button (click)=\"leaveClass()\" class=\"ui  button wideButton\">Leave Room</button>\n  </div>\n\n  ",
                        directives: [student_traffic_component_1.StudentTrafficComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], StudentDashboardComponent);
                return StudentDashboardComponent;
            }());
            exports_1("StudentDashboardComponent", StudentDashboardComponent);
        }
    }
});

//# sourceMappingURL=student-dashboard.component.js.map
