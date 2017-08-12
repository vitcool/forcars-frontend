import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      {
        id: 1,
        vendor: "VW",
        model: "Golf",
        year: 2010,
        VEngine: 1998,
        typeOfEngine: "diesel",
        horsepower: 125,
        color: "blue",
        price: 7999,
        priceCustomClearance: 2000,
        linkToPhoto: "/assets/images/vw_golf.jpg"
      },
      {
        id: 2,
        vendor: "Opel",
        model: "Astra",
        year: 2011,
        VEngine: 1798,
        typeOfEngine: "Petrol",
        horsepower: 105,
        color: "yellow",
        price: 7549,
        priceCustomClearance: 1850,
        linkToPhoto: "/assets/images/opel_astra.jpg"
      },
      {
        id: 3,
        vendor: "Seat",
        model: "Leon",
        year: 2013,
        VEngine: 1498,
        typeOfEngine: "Petrol",
        horsepower: 115,
        color: "black",
        price: 8749,
        priceCustomClearance: 1750,
        linkToPhoto: "/assets/images/seat_leon.jpg"
      }
    ];
    return {cars};
  }
}
