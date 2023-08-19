import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import {v4 as uuid} from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
    
    private cars: Car[]= [
        // {
        //     id: uuid(),
        //     brand: 'toyota',
        //     model :'corola'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda',
        //     model :'civic'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model :'cherokee'
        // },
    ]; 


    findAll(){
        return this.cars;
    }
    findOneById(id: string){

     const car  =this.cars.find(car => car.id === id);
    if (!car) {
        throw new NotFoundException (`Car with id'${id}'not found`);
    }

      return car;
    }

    create (CreateCarDto: CreateCarDto){

      const car: Car ={
          id: uuid(),
          ...CreateCarDto
      }

      this.cars.push(car);

        return car;

    }

    update(id: string, UpdateCarDto: UpdateCarDto){

     let carDB = this.findOneById(id);

     if(UpdateCarDto.id && UpdateCarDto.id !== id)
     throw new BadRequestException(`Car id is not inside body`);

     this.cars = this.cars.map ( car =>{

        if( car.id == id){
            carDB = {
                ...carDB, ...UpdateCarDto, id, }
           return carDB;
     }

     return car;

     
     })

     return carDB;

        }
        delete (id: string){
            const car = this.findOneById(id);
            this.cars = this.cars.filter (car => car.id !== id);
        }

        fillCarsWithSeedData( cars: Car[]){
            this.cars = cars;
        }
     }
     
     

     

    

