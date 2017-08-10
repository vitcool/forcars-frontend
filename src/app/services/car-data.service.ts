import { Injectable } from '@angular/core';
import { CarModel } from '../models/car-model'
import { CARS } from '../mocks/cars'

@Injectable()
export class CarDataService {

  constructor() { }

  getCars(): Promise<CarModel[]>{
    return Promise.resolve(CARS);
  }

}