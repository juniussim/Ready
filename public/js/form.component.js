System.register(['angular2/core', './chat.service'], function(exports_1, context_1) {
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
    var core_1, chat_service_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            // Use the @Component Decorator to define the following class as a component and provide the meta data including the view 
            FormComponent = (function () {
                //CLASS METHODS
                function FormComponent(_chatService) {
                    this._chatService = _chatService;
                    //once component is created grab a reference to the server from the Chat Service
                    this.server = this._chatService.getServer();
                }
                //provide functions for deciding what text to display in the form template
                FormComponent.prototype.placeholder = function () {
                    if (this.isJoinForm)
                        return "Your Name";
                    else
                        return "Say What?";
                };
                FormComponent.prototype.buttonLabel = function () {
                    if (this.isJoinForm)
                        return "Join";
                    else
                        return "Send";
                };
                //handle the button click to communicate with the service
                FormComponent.prototype.buttonClicked = function () {
                    // basic validation - at least one character in the input
                    if (this.inputValue.length === 0)
                        return false;
                    if (this.isJoinForm) {
                        this.isJoining = true;
                        this._chatService.joinChat(this.inputValue);
                    }
                    else {
                        this._chatService.sendMessage(this.inputValue);
                        this.inputValue = "";
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], FormComponent.prototype, "isJoinForm", void 0);
                FormComponent = __decorate([
                    core_1.Component({
                        selector: "chat-form",
                        template: "\n    <form id=\"JoinForm\" class=\"form-inline text-right\">\n        <fieldset [disabled]=\"!server.connected || isJoining\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"inputValue\" placeholder=\"{{placeholder()}}\" autocomplete=\"off\" required autofocus />\n          <button id=\"sendJoin\" class=\"btn btn-success\" [disabled]=\"!inputValue || isJoining\" (click)=\"buttonClicked(hero)\">{{buttonLabel()}}</button>\n        </fieldset>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [chat_service_1.ChatService])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});

//# sourceMappingURL=form.component.js.map
