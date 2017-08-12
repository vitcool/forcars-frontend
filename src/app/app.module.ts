import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsViewComponent } from './cars-view/cars-view.component';
import { CommonModule } from '@angular/common';
import { CarDetailViewComponent } from './car-detail-view/car-detail-view.component';

import { AlertModule } from 'ngx-bootstrap';
import { FormatYearPipe } from './pipes/format-year.pipe'
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import {Component} from "@angular/core";

import { CarDataService } from "./services/car-data.service";


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsViewComponent,
    CarDetailViewComponent,
    FormatYearPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
