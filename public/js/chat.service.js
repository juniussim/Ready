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
    var ChatService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Use the @Injectable Decorator to define the following class as a injectable service 
            ChatService = (function () {
                //CLASS METHODS
                function ChatService() {
                    var _this = this;
                    this.server = {
                        loading: true,
                        connected: false,
                        joined: false,
                        online: ""
                    };
                    this.user = { name: "Anon" };
                    this.messages = [];
                    //connect the socket.io client to our webserver (assuming it's running on the same port)
                    this.socket = io(window.location.host);
                    var self = this;
                    // ADD SOCKET EVENT LISTENERS
                    //handle connectting to and disconnecting from the chat server
                    this.socket.on("connect", function () {
                        console.log("Connected to Chat Socket");
                        _this.server.loading = false;
                        _this.server.connected = true;
                    });
                    this.socket.on("disconnect", function () {
                        console.log("Disconnected from Chat Socket");
                        _this.server.connected = false;
                        _this.server.joined = false;
                        //set array length to 0 to empty the array of past messages
                        _this.messages.length = 0;
                    });
                    //welcome message received from the server
                    this.socket.on("welcome", function (msg) {
                        console.log("Received welcome message: ", msg);
                        _this.server.joined = true;
                        //use unshift to add new messages to the front of the array and they can be displayed in order
                        _this.messages.unshift({
                            isStatus: true,
                            isOwn: false,
                            user: "",
                            message: msg
                        });
                    });
                    //chat message from another user
                    this.socket.on("chat", function (msg) {
                        console.log("Received message: ", msg);
                        _this.messages.unshift({
                            isStatus: false,
                            isOwn: false,
                            user: msg.user.name,
                            message: msg.message
                        });
                    });
                    //message received that new user has joined the chat
                    this.socket.on("joined", function (user) {
                        console.log(user.name + " joined the chat.");
                        _this.messages.unshift({
                            isStatus: true,
                            isOwn: false,
                            user: user.name,
                            message: " " + user.name + " joined the chat."
                        });
                    });
                    //handle leaving message
                    this.socket.on("left", function (user) {
                        console.log(user.name + " left the chat.");
                        _this.messages.unshift({
                            isStatus: true,
                            isOwn: false,
                            user: user.name,
                            message: " " + user.name + " left the chat."
                        });
                    });
                    //keep track of who is online
                    this.socket.on("online", function (connections) {
                        console.log("Connections: ", connections);
                        _this.server.online = "";
                        for (var i = 0; i < connections.length; ++i) {
                            if (connections[i].user) {
                                if (i > 0) {
                                    if (i == connections.length - 1)
                                        _this.server.online += " and ";
                                    else
                                        _this.server.online += ", ";
                                }
                                _this.server.online += connections[i].user.name;
                            }
                        }
                    });
                }
                //property accessor functions
                ChatService.prototype.getServer = function () {
                    return this.server;
                };
                ChatService.prototype.getMessages = function () {
                    return this.messages;
                };
                //handle form submission for joining the chat
                ChatService.prototype.joinChat = function (name) {
                    console.log("Joining chat with name: ", name);
                    this.user = { name: name };
                    this.socket.emit("join", this.user);
                };
                ;
                //handle form submission for sending a chat message 
                ChatService.prototype.sendMessage = function (message) {
                    console.log("Sending message: ", message);
                    this.socket.emit("chat", message);
                    //add user's own message to the message array
                    this.messages.unshift({
                        isStatus: false,
                        isOwn: true,
                        user: this.user.name,
                        message: message
                    });
                };
                ChatService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ChatService);
                return ChatService;
            }());
            exports_1("ChatService", ChatService);
        }
    }
});

//# sourceMappingURL=chat.service.js.map
