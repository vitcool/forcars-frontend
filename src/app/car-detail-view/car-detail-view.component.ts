import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";

import { CarModel } from "../models/car-model";
import { CarDataService } from "../services/car-data.service";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: "app-car-detail-view",
  templateUrl: "./car-detail-view.component.html",
  styleUrls: ["./car-detail-view.component.css"]
})
export class CarDetailViewComponent implements OnInit {
  @Input() car: CarModel;

  constructor(
    private heroService: CarDataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getCar(+params.get('id')))
    .subscribe(car => this.car = car);
  }

  goBack(): void {
    this.location.back();
  }

}
