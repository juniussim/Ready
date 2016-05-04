// This is our Route Component
System.register(['angular2/core', 'angular2/router', './menu.component', './instructor-class-name.component', './instructor-dashboard.component', './instructor-ready.component', './student-profile.component', './student-join.component', './student-dashboard.component', './student-ready.component', './classroom.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_component_1, instructor_class_name_component_1, instructor_dashboard_component_1, instructor_ready_component_1, student_profile_component_1, student_join_component_1, student_dashboard_component_1, student_ready_component_1, classroom_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (instructor_class_name_component_1_1) {
                instructor_class_name_component_1 = instructor_class_name_component_1_1;
            },
            function (instructor_dashboard_component_1_1) {
                instructor_dashboard_component_1 = instructor_dashboard_component_1_1;
            },
            function (instructor_ready_component_1_1) {
                instructor_ready_component_1 = instructor_ready_component_1_1;
            },
            function (student_profile_component_1_1) {
                student_profile_component_1 = student_profile_component_1_1;
            },
            function (student_join_component_1_1) {
                student_join_component_1 = student_join_component_1_1;
            },
            function (student_dashboard_component_1_1) {
                student_dashboard_component_1 = student_dashboard_component_1_1;
            },
            function (student_ready_component_1_1) {
                student_ready_component_1 = student_ready_component_1_1;
            },
            function (classroom_service_1_1) {
                classroom_service_1 = classroom_service_1_1;
            }],
        execute: function() {
            // Use the @Component Decorator to define the following class as a component and provide the meta data including the view
            AppComponent = (function () {
                function AppComponent(_classroomService) {
                    this._classroomService = _classroomService;
                    // this.appRoutes = this._classroomService.getRoutes();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, classroom_service_1.ClassroomService],
                        template: "\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n  "
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/menu',
                            name: 'Menu',
                            component: menu_component_1.MenuComponent,
                            useAsDefault: true,
                        },
                        {
                            path: '/Instructor-class-name',
                            name: 'Instructor-class-name',
                            component: instructor_class_name_component_1.InstructorClassNameComponent,
                        },
                        {
                            path: '/instructor-dashboard',
                            name: 'Instructor-dashboard',
                            component: instructor_dashboard_component_1.InstructorDashboardComponent,
                        },
                        {
                            path: '/instructor-ready',
                            name: 'Instructor-ready',
                            component: instructor_ready_component_1.InstructorReadyComponent,
                        },
                        {
                            path: '/student-profile',
                            name: 'Student-profile',
                            component: student_profile_component_1.StudentProfileComponent,
                        },
                        {
                            path: '/student-join',
                            name: 'Student-join',
                            component: student_join_component_1.StudentJoinComponent,
                        },
                        {
                            path: '/student-dashboard',
                            name: 'Student-dashboard',
                            component: student_dashboard_component_1.StudentDashboardComponent,
                        },
                        {
                            path: '/student-ready',
                            name: 'Student-ready',
                            component: student_ready_component_1.StudentReadyComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [classroom_service_1.ClassroomService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
