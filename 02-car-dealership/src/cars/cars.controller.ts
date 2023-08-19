import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

  constructor (
    private readonly CarsService: CarsService
  ) {}

    @Get()
    getAllCars(){
        return this.CarsService.findAll()
    }

      @Get(':id')
    getCarByID(@Param ('id',new ParseUUIDPipe) id: string) {

        return this.CarsService.findOneById (id);
        }

        @Post()
        createCar(@Body() createCardDto: CreateCarDto ){
         return this.CarsService.create(createCardDto);
        }
        
        @Patch(':id')
        updateCar(
          @Param('id', ParseUUIDPipe) id: string,
          @Body() UpdateCarDto: UpdateCarDto)
          {

         return this.CarsService.update (id, UpdateCarDto);
        }

        @Delete(':id')
        deleteCar(@Param ('id', new ParseUUIDPipe) id: string){
         return this.CarsService.delete (id)
        }

        
    }


