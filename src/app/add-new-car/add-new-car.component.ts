import { Component, OnInit } from '@angular/core';
import { CarModel } from "../models/car-model";
import { CarDataService } from "../services/car-data.service";

@Component({
  selector: 'new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css']
})
export class AddNewCarComponent implements OnInit {
  car: CarModel;
  cars: CarModel[];

  constructor(private carDataService: CarDataService) { }

  ngOnInit() {
    this.carDataService.getCars().then(cars => (this.cars = cars));
  }

  addCar(){
      this.carDataService.create(0,"","",0,0,"",0,"",0,0,"").then(car => {
        this.cars.push(car)});
  }

}
