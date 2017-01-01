import {Component} from '@angular/core';

class NavItem{
    constructor(public name:string,public url:string){}
}

@Component({
    moduleId : module.id,
    selector : 'nav-bar',
    templateUrl : 'navbar.component.html'
})
export class NavBarComponent {
    items : NavItem[] = [];
    selectedItem : NavItem;
    constructor(){
        this.items.push(new NavItem('Home','/home'));
        this.items.push(new NavItem('About','/about'));
    }

    selectItem(item:NavItem):boolean{
        this.selectedItem = item;
        return false;
    }

}