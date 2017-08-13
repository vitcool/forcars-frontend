import { Injectable } from "@angular/core";
import { CarModel } from "../models/car-model";
import { Http } from "@angular/http";
import {Headers} from '@angular/http';

import "rxjs/add/operator/toPromise";

@Injectable()
export class CarDataService {
  private carsUrl = "api/cars"; // URL to web api
  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(private http: Http) {}

  getCars(): Promise<CarModel[]> {
    return this.http
      .get(this.carsUrl)
      .toPromise()
      .then(response => response.json().data as CarModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCar(id: number): Promise<CarModel> {
    const url = `${this.carsUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as CarModel)
      .catch(this.handleError);
  }

  create(
    id: number,
    vendor: string,
    model: string,
    year: number,
    VEngine: number,
    typeOfEngine: string,
    horsepower: number,
    color: string,
    price: number,
    priceCustomClearance: number,
    linkToPhoto: string
  ): Promise<CarModel> {
    console.log('CreateCar');
    return this.http
      .post(
        this.carsUrl,
        JSON.stringify({
          id: id,
          vendor: vendor,
          model: model,
          year: year,
          VEngine: VEngine,
          typeOfEngine: typeOfEngine,
          horsepower: horsepower,
          color: color,
          price: price,
          priceCustomClearance: priceCustomClearance,
          linkToPhoto: linkToPhoto
        }), {headers:this.headers})
      .toPromise()
      .then(res => res.json().data as CarModel)
      .catch(this.handleError);
  }
}
