import { Injectable } from "@angular/core";
import { CarModel } from "../models/car-model";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CarDataService {

  private carsUrl = 'api/cars';  // URL to web api
  
  constructor(private http: Http) {}

  getCars(): Promise<CarModel[]> {
    return this.http.get(this.carsUrl)
               .toPromise()
               .then(response => response.json().data as CarModel[])
               .catch(this.handleError);
  }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCar(id: number): Promise<CarModel> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as CarModel)
      .catch(this.handleError);
  }
}
