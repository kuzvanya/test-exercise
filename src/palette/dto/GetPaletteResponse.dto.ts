import { ApiProperty } from '@nestjs/swagger';
import { PaletteInstanceResponseDto } from 'src/palette/dto/PaletteInstanceResponse.dto';

export class GetPaletteResponseDto {
  @ApiProperty({
    type: PaletteInstanceResponseDto,
  })
  palette: PaletteInstanceResponseDto;
}
