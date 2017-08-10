import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsViewComponent } from './cars-view/cars-view.component';
import { CommonModule } from '@angular/common';
import { CarDetailViewComponent } from './car-detail-view/car-detail-view.component';

import { AlertModule } from 'ngx-bootstrap';
import { FormatYearPipe } from './pipes/format-year.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CarsViewComponent,
    CarDetailViewComponent,
    FormatYearPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
