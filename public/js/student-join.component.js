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
    var StudentJoinComponent;
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
            StudentJoinComponent = (function () {
                function StudentJoinComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    this.errorCodeState = this._classroomService.getErrorState();
                    // end of constructor
                }
                StudentJoinComponent.prototype.submitSecretCode = function (secretCode) {
                    console.log("submit secret code");
                    this._classroomService.submitSecretCode(secretCode);
                    // if (this._classroomService.correctSecretCode) {
                    //   this._router.navigate(['Student-dashboard']);
                    // } else {
                    //   // don't let them pass through
                    //   // inform user that the code is wrong and ask the instructor for the code
                    //   // red box focus
                    console.log(this.errorCodeState);
                    // }
                };
                StudentJoinComponent = __decorate([
                    core_1.Component({
                        selector: 'student-join',
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: "\n  <h1>StudentJoin Component</h1>\n  <input type=\"text\" [(ngModel)]=\"inputValue\" placeholder=\"Enter Secret Code\" autocomplete=\"off\" required autofocus />\n  <button [disabled]=\"!inputValue\" (click)=\"submitSecretCode(inputValue)\" >LET'S GO</button>\n  <div *ngIf=\"errorCodeState.secretCodeError\">\n    <p>You can keep guessing or you can ask the instructor</p>\n  </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], StudentJoinComponent);
                return StudentJoinComponent;
            }());
            exports_1("StudentJoinComponent", StudentJoinComponent);
        }
    }
});

//# sourceMappingURL=student-join.component.js.map
