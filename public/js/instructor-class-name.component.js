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
    var InstructorClassNameComponent;
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
            InstructorClassNameComponent = (function () {
                function InstructorClassNameComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    // end of constructor
                }
                InstructorClassNameComponent.prototype.submitClassName = function (className) {
                    this._classroomService.submitClassName(className);
                    //THIS GUY NEED TO FINISH AFTER SECRETCODE IN CLASSROOM.SERVICE RUNS
                    // this._router.navigate(['Instructor-dashboard']);
                };
                InstructorClassNameComponent = __decorate([
                    core_1.Component({
                        selector: 'instructor-class-name',
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: "\n  <h1>InstructorClassName Component</h1>\n    <input type=\"text\" [(ngModel)]=\"inputValue\" placeholder=\"Enter Your Class Name\" autocomplete=\"off\" required autofocus />\n    <button [disabled]=\"!inputValue\" (click)=\"submitClassName(inputValue)\">LET'S GO</button>\n  ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], InstructorClassNameComponent);
                return InstructorClassNameComponent;
            }());
            exports_1("InstructorClassNameComponent", InstructorClassNameComponent);
        }
    }
});

//# sourceMappingURL=instructor-class-name.component.js.map
