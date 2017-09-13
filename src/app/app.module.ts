import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';

import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

//#4 If Router Module is placed under @NgModule then an error is being thrown. Check out why.
//The Router module has been directlt palced in the imports section of @NgModule
//The error was their because component class must be followed by @ decorator

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot ([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: `heroes`,
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    DashboardComponent,
    HeroDetailComponent, 
    HeroesComponent 
  ],
  providers: [ 
    HeroService 
  ],
  bootstrap:  [ 
    AppComponent 
  ]
})

export class AppModule { }


