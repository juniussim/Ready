System.register(['angular2/core', './form.component', './chat.service'], function(exports_1, context_1) {
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
    var core_1, form_component_1, chat_service_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            // Use the @Component Decorator to define the following class as a component and provide the meta data including the view 
            MainComponent = (function () {
                //CLASS METHODS
                function MainComponent(_chatService) {
                    this._chatService = _chatService;
                    //once created - get reference to the server and messages array from the chatService
                    this.server = this._chatService.getServer();
                    this.messages = this._chatService.getMessages();
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: "main-chat",
                        directives: [form_component_1.FormComponent],
                        template: "\n    <main class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <chat-form [isJoinForm]=false ></chat-form>\n      </div>\n      <section class=\"panel-body\">\n        <div class=\"text-center\"><small id=\"connected\" *ngIf=\"server\">{{server.online}}</small></div>\n        <hr>\n        <div id=\"messages\">\n          <div *ngFor=\"#msg of messages\" [class.text-center]=\"msg.isStatus\" >\n            <strong *ngIf=\"msg.isStatus\">{{msg.message}}</strong>\n            <div *ngIf=\"!msg.isStatus\" class=\"alert\" [class.alert-success]=\"!msg.isOwn\" [class.alert-info]=\"msg.isOwn\" [class.text-right]=\"msg.isOwn\">\n              <span *ngIf=\"msg.isOwn\">{{msg.message}}</span>\n              <span *ngIf=\"!msg.isOwn\"><strong>{{msg.user}}:</strong> {{msg.message}}</span>\n            </div>\n          </div>\n        </div>\n      </section>\n    </main>\n  "
                    }), 
                    __metadata('design:paramtypes', [chat_service_1.ChatService])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=main.component.js.map
