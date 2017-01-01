import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RouterModule,Routes }   from '@angular/router';
import { AppComponent }  from './app.component';

const routes : Routes = [
  {
        path: '',
        redirectTo: 'home',
        pathMatch : 'full' 
      },
      {
        path: 'home',
        component: HomeComponent
      },{
        path : 'about',
        component : AboutComponent
      }
]

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot(routes)
   ],
  declarations: [ AppComponent,NavBarComponent,JumbotronComponent,
    HomeComponent,AboutComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
