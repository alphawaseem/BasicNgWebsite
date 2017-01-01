import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,NavBarComponent,JumbotronComponent,
    HomeComponent,AboutComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
