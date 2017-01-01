import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'jumbotron',
    templateUrl : 'jumbotron.component.html'
})
export class JumbotronComponent{
    private heading : string;
    private text : string;
    private btnText : string;
    private btnUrl : string;
    constructor() {
        this.heading = "Welcome To Angular2 Website";
        this.text = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
        this.btnUrl = 'http://www.angular.io',
        this.btnText  = 'Learn More'
    }
}