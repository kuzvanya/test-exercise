import { ApiProperty } from '@nestjs/swagger';

export class PaletteColorInstanceDto {
  @ApiProperty({
    description: 'Значение цвета',
    example: '#560BD5',
  })
  hex_value: string;
  @ApiProperty({
    description: 'Название цвета',
    example: 'Electric Violet',
  })
  name: string;
}
