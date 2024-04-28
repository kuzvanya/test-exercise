import { ApiProperty } from '@nestjs/swagger';

export class PaletteInstanceResponseDto {
  @ApiProperty({
    description: 'Идентификатор',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Название',
    example: 'my palette',
  })
  name: string;
}
