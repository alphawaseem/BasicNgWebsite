import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <jumbotron></jumbotron>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { }
