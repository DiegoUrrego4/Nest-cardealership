import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

/*
  ? Nota: los servicios es donde se agrega la lógica de negocio
*/
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Tesla',
      model: 'Model 3',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`car with id '${id}' not found`);
    return car;
  }
}
