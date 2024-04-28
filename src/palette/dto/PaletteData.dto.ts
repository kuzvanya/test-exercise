import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaletteDataDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Название палитры',
    example: 'My pallete',
  })
  name: string;
}
