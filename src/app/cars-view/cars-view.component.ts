import { Component, OnInit } from "@angular/core";
import { CarDataService } from "../services/car-data.service";
import { CarModel } from "../models/car-model";
import { Router }   from '@angular/router';

@Component({
  selector: "app-cars-view",
  templateUrl: "./cars-view.component.html",
  styleUrls: ["./cars-view.component.css"]
})
export class CarsViewComponent implements OnInit {
  cars: CarModel[];
  selectedCar: CarModel;

  constructor(private carDataService: CarDataService, private router: Router) {}

  ngOnInit() {
    this.carDataService.getCars().then(cars => (this.cars = cars));
  }

  onSelect(car: CarModel) {
    this.selectedCar = car;
  }

  gotoDetail(selectedCar): void {
    this.router.navigate(["/cardetails", selectedCar.id]);
  }
}
