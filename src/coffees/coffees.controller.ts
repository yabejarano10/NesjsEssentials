import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { resolve } from 'path';
import { Public } from 'src/common/decorators/public.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeservice:CoffeesService){}

    @Public()
    @Get()
    findAll(@Query() paginationQuery:PaginationQueryDto){
        return this.coffeservice.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
       return this.coffeservice.findOne(''+id);
    }

    @Post()
    create(@Body() createCoffeeDto:CreateCoffeeDto){
        return this.coffeservice.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body(ValidationPipe) updateCoffeeDt:UpdateCoffeeDto){
       return this.coffeservice.update(id,updateCoffeeDt);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.coffeservice.remove(id);
    }
}
