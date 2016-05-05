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
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: "\n  <h1>StudentDashboard Component</h1>\n  <student-traffic></student-traffic>\n  <button (click)=\"leaveClass()\">Leave Room</button>\n  ",
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
