import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../services/car-data.service'
import { CarModel } from "../models/car-model";

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.css']
})
export class CarsViewComponent implements OnInit {
  cars:CarModel[];
  
  constructor(private carDataService: CarDataService) { }

  ngOnInit() {
    this.carDataService.getCars().then(cars => this.cars = cars);
  }

}
