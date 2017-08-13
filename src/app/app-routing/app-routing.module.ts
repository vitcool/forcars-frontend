import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { CarsViewComponent } from '../cars-view/cars-view.component';
import { CarDetailViewComponent } from '../car-detail-view/car-detail-view.component';
import {Component} from "@angular/core";
import { AddNewCarComponent } from "../add-new-car/add-new-car.component";

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cardetails/:id', component: CarDetailViewComponent },
  { path: 'cars',     component: CarsViewComponent },
  { path: 'new', component: AddNewCarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
