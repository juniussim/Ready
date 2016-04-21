// Import all of our dependencies
import {Component, OnInit} from 'angular2/core';
import {FormComponent} from './form.component';

// Use the @Component Decorator to define the following class as a component and provide the meta data including the view 
@Component({
  selector: "join-chat",
  directives: [FormComponent],
  template: `
    <section id="join" class="well">
    <chat-form [isJoinForm]=true ></chat-form>
    </section>
  `
})

export class JoinComponent {
}
