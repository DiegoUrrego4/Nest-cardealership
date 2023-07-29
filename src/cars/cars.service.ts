import { Injectable } from "@nestjs/common";

/*
  ? Nota: los servicios es donde se agrega la logica de negocio
*/
@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Tesla',
      model: 'Model 3',
    },
    {
      id: 3,
      brand: 'Honda',
      model: 'Civic',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    this.cars.find((car) => car.id === id);
    return this.cars[id];
  }
}
