import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeservice:CoffeesService){}

    @Get()
    findAll(@Query() paginationQuery:PaginationQueryDto){
        return this.coffeservice.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id:string){
       return this.coffeservice.findOne(id);
    }

    @Post()
    create(@Body() createCoffeeDto:CreateCoffeeDto){
        return this.coffeservice.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() updateCoffeeDt:UpdateCoffeeDto){
       return this.coffeservice.update(id,updateCoffeeDt);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.coffeservice.remove(id);
    }
}
