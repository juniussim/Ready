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
            {
                name: string;
            }
            {
                name: string;
            }
            ChatService = (function () {
                function ChatService() {
                }
                ChatService.prototype.getHeroes = function () {
                    var _this = this;
                    ngOnInit();
                    {
                        this.getHeroes();
                    }
                    var timeOut = setInterval(function () {
                        console.log('more heroes');
                        if (HEROES.length > 0)
                            _this.heroes.push(HEROES.shift());
                        else
                            clearTimeout(timeOut);
                    }, 500);
                    return new Promise(function (resolve) {
                        return setTimeout(function () {
                            _this.heroes = FIRST_HERO;
                            resolve(_this.heroes);
                        }, 0);
                    });
                };
                //  getHero(id: number) {
                //    return new Promise<Hero>(this.findHero);
                //  }
                ChatService.prototype.getHero = function (id) {
                    return Promise.resolve(HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
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

//# sourceMappingURL=chat-service.service.js.map
