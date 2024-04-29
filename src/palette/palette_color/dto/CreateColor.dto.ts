import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

export class CreateColorDto {
  @IsString()
  @Matches(/^#([0-9A-F]{3}|[0-9A-F]{6})$/)
  @ApiProperty({
    description: 'Значение цвета в HEX(буквы заглавные)',
    example: '#560BD5',
  })
  hex_value: string;
}
