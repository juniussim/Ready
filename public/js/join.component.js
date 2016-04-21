System.register(['angular2/core', './form.component'], function(exports_1, context_1) {
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
    var core_1, form_component_1;
    var JoinComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            }],
        execute: function() {
            // Use the @Component Decorator to define the following class as a component and provide the meta data including the view 
            JoinComponent = (function () {
                function JoinComponent() {
                }
                JoinComponent = __decorate([
                    core_1.Component({
                        selector: "join-chat",
                        directives: [form_component_1.FormComponent],
                        template: "\n    <section id=\"join\" class=\"well\">\n    <chat-form [isJoinForm]=true ></chat-form>\n    </section>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], JoinComponent);
                return JoinComponent;
            }());
            exports_1("JoinComponent", JoinComponent);
        }
    }
});

//# sourceMappingURL=join.component.js.map
