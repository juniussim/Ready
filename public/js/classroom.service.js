System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ClassroomService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Use the @Injectable Decorator to define the following class as a injectable service
            ClassroomService = (function () {
                function ClassroomService() {
                    //connect the socket.io client to our webserver (assuming it's running on the same port)
                    this.socket = io(window.location.host);
                    // var self = this;
                    // // ADD SOCKET EVENT LISTENERS
                    // //handle connectting to and disconnecting from the chat server
                    this.socket.on("connect", function () {
                        console.log("Connected to Chat Socket");
                    });
                    // this.socket.on("disconnect", () => {
                    //   console.log("Disconnected from Chat Socket");
                    //   this.server.connected = false;
                    //   this.server.joined = false;
                    //   //set array length to 0 to empty the array of past messages
                    //   this.messages.length = 0;
                    // });
                }
                //CLASS PROPERTIES
                // const server:Server = {
                //   loading: true,
                //   connected: false,
                //   joined: false,
                //   online: ""
                // }
                //property accessor functions
                // getServer(){
                //   return this.server;
                // }
                // getMessages(){
                //   return this.messages;
                // }
                //handle form submission for joining the chat
                // joinChat(name){
                //   console.log("Joining chat with name: ", name);
                //
                //   this.user = { name: name }
                //   this.socket.emit("join", this.user );
                // });
                //
                // //handle form submission for sending a chat message
                // sendMessage(message) {
                //   console.log("Sending message: ", message);
                //   this.socket.emit("chat", message );
                //   //add user's own message to the message array
                //   this.messages.unshift({
                //     isStatus: false,
                //     isOwn: true,
                //     user: this.user.name,
                //     message: message
                //   });
                // }
                // Menu Component
                // Instructor Create Component
                ClassroomService.prototype.submitClassName = function (className) {
                    console.log("My class name is: ", className);
                    this.socket.emit("submitClassName", className);
                };
                ClassroomService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ClassroomService);
                return ClassroomService;
            }());
            exports_1("ClassroomService", ClassroomService);
        }
    }
});

//# sourceMappingURL=classroom.service.js.map
