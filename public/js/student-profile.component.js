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
    var StudentProfileComponent;
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
            StudentProfileComponent = (function () {
                function StudentProfileComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    // end of constructor
                }
                StudentProfileComponent.prototype.submitProfileName = function (profileName) {
                    this._classroomService.submitProfileName(profileName);
                    this._router.navigate(['Student-join']);
                };
                StudentProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'student-profile',
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: "\n   <menu title=\"Angular2\" class=\"ui fluid one item  menu navPanel\">\n      <a class=\"item navHeader\">Ready</a>\n   </menu>\n   <div class=\"contentBody\">\n     <input type=\"text\" [(ngModel)]=\"inputValue\" placeholder=\"What's Your Name?\" autocomplete=\"off\" required autofocus />\n     <button [disabled]=\"!inputValue\" class=\"ui  button wideButton\" (click)=\"submitProfileName(inputValue)\">CONTINUE</button>\n   </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], StudentProfileComponent);
                return StudentProfileComponent;
            }());
            exports_1("StudentProfileComponent", StudentProfileComponent);
        }
    }
});

//# sourceMappingURL=student-profile.component.js.map
