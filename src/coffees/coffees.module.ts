import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entitites/coffee.entity';
import { Flavor } from './entitites/flavor.entity';


@Module({
    imports:[TypeOrmModule.forFeature([Coffee,Flavor,Event])],
    controllers: [CoffeesController],
    providers: [CoffeesService,
    {provide: COFFEE_BRANDS,useFactory: () => ['buddy','nescafe']}],
    exports: [CoffeesService]
})
export class CoffeesModule {}
