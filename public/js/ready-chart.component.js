System.register(['angular2/core', './classroom.service'], function(exports_1, context_1) {
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
    var core_1, classroom_service_1;
    var ReadyChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (classroom_service_1_1) {
                classroom_service_1 = classroom_service_1_1;
            }],
        execute: function() {
            ReadyChartComponent = (function () {
                function ReadyChartComponent(_router, _classroomService) {
                    this._router = _router;
                    this._classroomService = _classroomService;
                    this.studentConnections = this._classroomService.getStudentConnections();
                    this.totalNumberOfReadyStudents = this._classroomService.getTotalNumberOfReadyStudents();
                    // end of constructor
                }
                ReadyChartComponent = __decorate([
                    core_1.Component({
                        selector: 'ready-chart',
                        styles: ["\n    .chicken {\n    }\n  "],
                        template: "\n  <h3>Ready Chart</h3>\n  <h3> {{totalNumberOfReadyStudents.number}}/ {{studentConnections.number}}</h3>\n  ",
                    }), 
                    __metadata('design:paramtypes', [Object, classroom_service_1.ClassroomService])
                ], ReadyChartComponent);
                return ReadyChartComponent;
            }());
            exports_1("ReadyChartComponent", ReadyChartComponent);
        }
    }
});

//# sourceMappingURL=ready-chart.component.js.map
