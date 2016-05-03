// Import all of our dependencies
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';

// Start our Angular2 App with the AppComponent as the root node
bootstrap(AppComponent, [ROUTER_PROVIDERS]);
