System.register(['angular2/core', './classroom.service'], function(exports_1, context_1) {
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
    var core_1, classroom_service_1;
    var IntroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classroom_service_1_1) {
                classroom_service_1 = classroom_service_1_1;
            }],
        execute: function() {
            IntroComponent = (function () {
                function IntroComponent(_classroomService) {
                    this._classroomService = _classroomService;
                }
                IntroComponent.prototype.buttonClicked = function () {
                    this._classroomService.changeRoutes();
                };
                IntroComponent = __decorate([
                    core_1.Component({
                        selector: "intro",
                        template: "\n    <p class=\"introTagLine\">Rails is an interactive teaching tool that anyone can use to create a better learning environment</p>\n    <h3 class=\"introFeatureTitle\"><strong>Are you ready</strong></h3>\n    <p class=\"introFeatureDescription\">Allows the instructor to easily know when students are ready without opening his damn mouth.</p>\n    <div class=\"introButton\" (click)=\"buttonClicked()\">GOT IT</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [classroom_service_1.ClassroomService])
                ], IntroComponent);
                return IntroComponent;
            }());
            exports_1("IntroComponent", IntroComponent);
        }
    }
});

//# sourceMappingURL=intro.component.js.map
