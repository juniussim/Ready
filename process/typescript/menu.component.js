System.register(['angular2/core', 'angular2/router', './classroom.service', "ng-semantic"], function(exports_1, context_1) {
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
    var core_1, router_1, classroom_service_1, ng_semantic_1;
    var MenuComponent;
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
            },
            function (ng_semantic_1_1) {
                ng_semantic_1 = ng_semantic_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    // end of constructor
                }
                MenuComponent.prototype.joinClass = function () {
                    this._router.navigate(['Student-profile']);
                };
                MenuComponent.prototype.createClass = function () {
                    this._router.navigate(['Instructor-class-name']);
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'readyMenu',
                        directives: [ng_semantic_1.SEMANTIC_COMPONENTS, ng_semantic_1.SEMANTIC_DIRECTIVES],
                        styles: ["\n    .chicken {\n\n    }\n  "],
                        template: "\n    <menu title=\"Angular2\" class=\"ui fluid one item  menu navPanel\">\n      <a class=\"item navHeader\">Ready</a>\n    </menu>\n    <div class=\"contentBody\">\n      <button (click)=\"joinClass()\" class=\"ui  button wideButton\">Join Class</button>\n      <p class=\"paragraphText ui\">OR IF YOU'RE THE INSTRUCTOR OF A CLASS, CREATE A CLASS</p>\n      <button (click)=\"createClass()\" class=\"ui  button wideButton\">Create Class</button>\n    </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, classroom_service_1.ClassroomService])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map