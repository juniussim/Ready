System.register(['angular2/core', './intro.component', './classroom.service'], function(exports_1, context_1) {
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
    var core_1, intro_component_1, classroom_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (classroom_service_1_1) {
                classroom_service_1 = classroom_service_1_1;
            }],
        execute: function() {
            // import {ChatService, Server} from './chat.service';
            // Use the @Component Decorator to define the following class as a component and provide the meta data including the view
            AppComponent = (function () {
                // //CLASS METHODS
                function AppComponent(_classroomService) {
                    this._classroomService = _classroomService;
                    // //CLASS PROPERTIES
                    this.navHeader = "Ready";
                    //one component is created grab a reference to the server from the Chat Service
                    this.appRoutes = this._classroomService.getRoutes();
                }
                // server : Server;
                AppComponent.prototype.buttonClicked = function () {
                    console.log("button works");
                    this.appRoutes = this._classroomService.getRoutes();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app-component",
                        directives: [intro_component_1.IntroComponent],
                        providers: [classroom_service_1.ClassroomService],
                        template: "\n  <div class=\"container\">\n    <div class=\"navPanel\">\n      <div class=\"navHeader\">{{navHeader}}</div>\n    </div>\n\n    <div class=\"bodyDiv\" [ngSwitch]=\"appRoutes\">\n      <intro  *ngSwitchWhen=\"'intro'\" class=\"intro\"></intro>\n    </div>\n    <div (click)=\"buttonClicked()\">hello</div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [classroom_service_1.ClassroomService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map