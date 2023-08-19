import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {

    constructor(
  
        private readonly CarsService : CarsService,
        private readonly bransSeervice: BrandsService,

    ){}
  
 populateDB(){

    // CARS_SEED
    // BRANDS_SEED

    this.CarsService.fillCarsWithSeedData (CARS_SEED);
    this.bransSeervice.fillCarsWithSeedData (BRANDS_SEED);

    


  return 'Seed excuted successfully';

 }
  
}
