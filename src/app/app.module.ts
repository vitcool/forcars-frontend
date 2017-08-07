import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsViewComponent } from './cars-view/cars-view.component';
import { CommonModule } from '@angular/common';
import { CarDetailViewComponent } from './car-detail-view/car-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsViewComponent,
    CarDetailViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
