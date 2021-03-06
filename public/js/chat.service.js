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
    var ClassRoomService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // // Define the interfaces for the data types we are working with.
            // export interface Server {
            //   loading: boolean,   //has the service loaded
            //   connected: boolean, //has a socket connection established
            //   joined: boolean,    //has the user joined the chat
            //   online: string      //names of users currently in the chat
            // }
            // Use the @Injectable Decorator to define the following class as a injectable service
            ClassRoomService = (function () {
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
                //CLASS METHODS
                function ClassRoomService() {
                    //connect the socket.io client to our webserver (assuming it's running on the same port)
                    // this.socket = io(window.location.host);
                    //
                    // var self = this;
                    // // ADD SOCKET EVENT LISTENERS
                    // //handle connectting to and disconnecting from the chat server
                    // this.socket.on("connect", () => {
                    //   console.log("Connected to Chat Socket");
                    //   this.server.loading = false;
                    //   this.server.connected = true;
                    // });
                    // this.socket.on("disconnect", () => {
                    //   console.log("Disconnected from Chat Socket");
                    //   this.server.connected = false;
                    //   this.server.joined = false;
                    //   //set array length to 0 to empty the array of past messages
                    //   this.messages.length = 0;
                    // });
                }
                ClassRoomService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ClassRoomService);
                return ClassRoomService;
            }());
            exports_1("ClassRoomService", ClassRoomService);
        }
    }
});

//# sourceMappingURL=chat.service.js.map
