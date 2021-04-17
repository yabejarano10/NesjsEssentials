import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entitites/coffee.entity';
import { Flavor } from './entitites/flavor.entity';
import coffeesConfig from './config/coffees.config';
import { COFFEE_BRANDS } from './coffees.constants';
import { CoffeesController } from './coffees.controller';


@Module({
    imports:[TypeOrmModule.forFeature([Coffee,Flavor]), ConfigModule.forFeature(coffeesConfig)],
    controllers: [CoffeesController],
    providers: [CoffeesService,
    {provide: COFFEE_BRANDS,useFactory: () => ['buddy','nescafe']}],
    exports: [CoffeesService]
})
export class CoffeesModule {}
