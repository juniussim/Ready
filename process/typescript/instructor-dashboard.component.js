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
    var InstructorDashboardComponent;
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
            // import { InstructorTrafficComponent } from './instructor-traffic.component';
            InstructorDashboardComponent = (function () {
                function InstructorDashboardComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    var room = this._classroomService.getRoom();
                    this.secretCode = room.secretCode;
                    this.name = room.name;
                    this.studentConnections = this._classroomService.getStudentConnections();
                    // end of constructor
                }
                InstructorDashboardComponent.prototype.areYouReady = function () {
                    this._router.navigate(['Instructor-ready']);
                    this._classroomService.instructorCallReady();
                    // use the classroomService to emit to the server that we are starting are u ready
                    // use the server to emit to all those in the room (excluding instructor) - use broadcast
                    // and in the service (listen for an emit)
                    // in the emit (reroute the student into student ready)
                };
                InstructorDashboardComponent.prototype.closeClass = function () {
                    this._router.navigate(['Menu']);
                    this._classroomService.closeClass();
                };
                InstructorDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'instructor-dashboard',
                        styles: ["\n    #instructorSecretCode {\n      margin-top: -0.1em;\n      margin-bottom: 0.7em;\n      background-color: white;\n      border: 2px solid black;\n      font-size: 2.2em !important;\n      padding: 0.3em;\n    }\n  "],
                        template: "\n  <menu title=\"Angular2\" class=\"ui fluid one item  menu navPanel\">\n    <a class=\"item navHeader\">{{name}}</a>\n  </menu>\n\n  <div class=\"contentBody\">\n   <br>\n   <p class=\"paragraphText ui\">ASK YOUR STUDENTS TO JOIN THE ROOM USING THIS CODE:</p>\n    <h1 id=\"instructorSecretCode\">{{secretCode}}</h1>\n    <h1>STUDENTS IN ROOM: {{studentConnections.number}}</h1>\n   <br>\n    <button (click)=\"areYouReady()\" class=\"ui  button wideButton\">SEND 'ARE YOU READY?'</button>\n    <button (click)=\"closeClass()\" class=\"ui  button wideButton\">CLOSE ROOM</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], InstructorDashboardComponent);
                return InstructorDashboardComponent;
            }());
            exports_1("InstructorDashboardComponent", InstructorDashboardComponent);
        }
    }
});
// anything that insides the constructor gets done first
// followed by ngOnInit
// so best practice to leave out the heavy duty stuff outside the constructor and in the Init
//# sourceMappingURL=instructor-dashboard.component.js.map