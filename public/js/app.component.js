System.register(['angular2/core', './main.component', './join.component', './chat.service'], function(exports_1, context_1) {
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
    var core_1, main_component_1, join_component_1, chat_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (join_component_1_1) {
                join_component_1 = join_component_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            // Use the @Component Decorator to define the following class as a component and provide the meta data including the view 
            AppComponent = (function () {
                //CLASS METHODS
                function AppComponent(_chatService) {
                    this._chatService = _chatService;
                    //CLASS PROPERTIES
                    this.title = "Angular 2 Chat";
                    //one component is created grab a reference to the server from the Chat Service
                    this.server = this._chatService.getServer();
                }
                //decide what status message should be based upon connection
                AppComponent.prototype.statusMessage = function () {
                    if (!this.server.loading && this.server.connected)
                        return "connected";
                    if (!this.server.loading && !this.server.connected)
                        return "disconnected";
                    return "loading";
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "chat-app",
                        directives: [main_component_1.MainComponent, join_component_1.JoinComponent],
                        providers: [chat_service_1.ChatService],
                        template: "\n    <div class=\"container\">\n      <h1>{{title}} \n        <!-- status tag changes based upon the connection state -->\n        <span id=\"status\" class=\"label label-default\"\n          [class.label-default]=\"server.loading\" \n          [class.label-success]=\"!server.loading && server.connected\" \n          [class.label-danger]=\"!server.loading && !server.connected\">{{statusMessage()}}</span>\n      </h1>\n    </div>\n    <!-- show join component if the server is not connected or the user hasn't joined yet -->\n    <join-chat *ngIf=\"!server.connected || !server.joined\"></join-chat>\n    <!-- else show main component (if conected and user has joined) -->\n    <main-chat *ngIf=\"server.connected && server.joined\"></main-chat>\n  "
                    }), 
                    __metadata('design:paramtypes', [chat_service_1.ChatService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
