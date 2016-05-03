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
    var InstructorCreateComponent;
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
            InstructorCreateComponent = (function () {
                function InstructorCreateComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    // end of constructor
                }
                InstructorCreateComponent.prototype.submitClassName = function (className) {
                    this._classroomService.submitClassName(className);
                    this._router.navigate(['Instructor-dashboard']);
                };
                InstructorCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'instructor-create',
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: "\n  <h1>InstructorCreate Component</h1>\n    <input type=\"text\" [(ngModel)]=\"inputValue\" placeholder=\"Enter Your Class Name\" autocomplete=\"off\" required autofocus />\n    <button [disabled]=\"!inputValue\" (click)=\"submitClassName(inputValue)\">LET'S GO</button>\n  ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], InstructorCreateComponent);
                return InstructorCreateComponent;
            }());
            exports_1("InstructorCreateComponent", InstructorCreateComponent);
        }
    }
});

//# sourceMappingURL=instructor-create.component.js.map
