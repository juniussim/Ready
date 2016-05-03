// This is our Route Component

// Import all of our dependencies
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { MenuComponent } from './menu.component';
import { InstructorClassNameComponent } from './instructor-class-name.component';
import { InstructorDashboardComponent } from './instructor-dashboard.component';
import { InstructorReadyComponent } from './instructor-ready.component';
import { StudentProfileComponent } from './student-profile.component';
import { StudentJoinComponent } from './student-join.component';
import { StudentDashboardComponent } from './student-dashboard.component';
import { StudentReadyComponent } from './student-ready.component';

import { ClassroomService } from './classroom.service';

// Use the @Component Decorator to define the following class as a component and provide the meta data including the view
@Component({
  selector: "my-app",
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, ClassroomService],
  template: `
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  {
    path: '/menu',
    name: 'Menu',
    component: MenuComponent,
    useAsDefault: true,
  },
  {
    path: '/Instructor-class-name',
    name: 'Instructor-class-name',
    component: InstructorClassNameComponent,
  },
  {
    path: '/instructor-dashboard',
    name: 'Instructor-dashboard',
    component: InstructorDashboardComponent,
  },
  {
    path: '/instructor-ready',
    name: 'Instructor-ready',
    component: InstructorReadyComponent,
  },
  {
    path: '/student-profile',
    name: 'Student-profile',
    component: StudentProfileComponent,
  },
  {
    path: '/student-join',
    name: 'Student-join',
    component: StudentJoinComponent,
  },
  {
    path: '/student-dashboard',
    name: '/Student-dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: '/student-ready',
    name: 'Student-ready',
    component: StudentReadyComponent,
  },
])
export class AppComponent{

  constructor(private _classroomService: ClassroomService) {
    // this.appRoutes = this._classroomService.getRoutes();
  }
  // //CLASS PROPERTIES
  // navHeader: string = "Ready";
  //
  // //decide what status message should be based upon connection
  // statusMessage():string {
  //     if (!this.server.loading && this.server.connected) return "connected"
  //     if (!this.server.loading && !this.server.connected) return "disconnected"
  //     return "loading"
  // }
}
