import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateCoffeeDto {
    @ApiProperty({description: 'the name'})
    @IsString()
    readonly name: string;

    @ApiProperty({description: 'the brand'})
    @IsString()
    readonly brand: string;

    @ApiProperty()
    @IsString({ each: true })
    readonly flavors: string[];
}
