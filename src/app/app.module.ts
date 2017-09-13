import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//#4 If Router Module is placed under @NgModule then an error is being thrown. Check out why.
//The Router module has been directlt palced in the imports section of @NgModule
//The error was their because component class must be followed by @ decorator

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
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


