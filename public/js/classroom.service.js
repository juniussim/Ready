System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ClassroomService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // export interface Room {
            //   name: string,
            //   secretCode: string
            // }
            // Use the @Injectable Decorator to define the following class as a injectable service
            ClassroomService = (function () {
                function ClassroomService(_router) {
                    var _this = this;
                    this._router = _router;
                    // ignore this silly error
                    //connect the socket.io client to our webserver (assuming it's running on the same port)
                    this.socket = io(window.location.host);
                    // ADD SOCKET EVENT LISTENERS
                    // We need this event listeners to be present the moment the component is created
                    // ================================== Instructor ==================================
                    this.socket.on('connect', function () {
                        console.log('Connected to Chat Socket');
                    });
                    this.socket.on('disconnect', function () {
                        console.log('Disconnected from Chat Socket');
                    });
                    this.socket.on('createSecretCode', function (room) {
                        console.log('Recieved Room Object:', room);
                        _this.room = room;
                        _this._router.navigate(['Instructor-dashboard']);
                    });
                    // ================================== Student ==================================
                    this.socket.on('secretCodeExist', function (correctSecretCode) {
                        // we want to do the room entry logic here
                        if (correctSecretCode) {
                            _this.errorState = { secretCodeError: false };
                            _this._router.navigate(['Student-dashboard']);
                        }
                        else {
                            _this.errorState = { secretCodeError: true };
                        }
                        console.log('status of correctSecretCode', correctSecretCode);
                    });
                    // end of constructor braces
                }
                ClassroomService.prototype.getRoom = function () {
                    // console.log('look here',this.room)
                    return this.room;
                };
                ClassroomService.prototype.getSecretCodeError = function () {
                    return this.errorState;
                };
                // Menu Component
                // Instructor ClassName Component
                ClassroomService.prototype.submitClassName = function (className) {
                    console.log('My class name is: ', className);
                    this.socket.emit('submitClassName', className);
                };
                // Instructor Dashboard Component
                ClassroomService.prototype.closeRoom = function () {
                    console.log('Closing Room: ', this.room);
                    this.socket.emit('closeRoom', this.room);
                    // we don't necessarily need this, what is the best practice
                    this.room = {
                        name: null,
                        secretCode: null,
                    };
                };
                // Student Profile Component
                ClassroomService.prototype.submitProfileName = function (profileName) {
                    console.log('My profile name is: ', profileName);
                    // console.log(this.user);
                    this.user = { name: profileName };
                    this.socket.emit('submitProfileName', profileName);
                };
                // Student Join Component
                ClassroomService.prototype.submitSecretCode = function (secretCode) {
                    console.log('Secret Code is: ', secretCode);
                    this.socket.emit('submitSecretCode', secretCode);
                };
                ClassroomService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ClassroomService);
                return ClassroomService;
            }());
            exports_1("ClassroomService", ClassroomService);
        }
    }
});

//# sourceMappingURL=classroom.service.js.map
