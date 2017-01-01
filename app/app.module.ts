import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RouterModule }   from '@angular/router';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },{
        path : 'about',
        component : AboutComponent
      }
    ])
   ],
  declarations: [ AppComponent,NavBarComponent,JumbotronComponent,
    HomeComponent,AboutComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
