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

import { AppRoutingModule }     from './app-routing/app-routing.module';
import {Component} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    CarsViewComponent,
    CarDetailViewComponent,
    FormatYearPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
