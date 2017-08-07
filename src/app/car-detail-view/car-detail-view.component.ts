import { Component, OnInit, Input } from "@angular/core";
import { CarModel } from "../car-model";

@Component({
  selector: 'app-car-detail-view',
  templateUrl: './car-detail-view.component.html',
  styleUrls: ['./car-detail-view.component.css']
})
export class CarDetailViewComponent implements OnInit {
  @Input() hero: CarModel;

  constructor() { }

  ngOnInit() {
  }

}
