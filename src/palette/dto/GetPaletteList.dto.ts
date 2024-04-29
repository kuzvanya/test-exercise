import { ApiProperty } from '@nestjs/swagger';
import { PaletteInstanceResponseDto } from 'src/palette/dto/PaletteInstanceResponse.dto';

export class GetPaletteListDto {
  @ApiProperty({
    type: [PaletteInstanceResponseDto],
  })
  palettes: PaletteInstanceResponseDto[];
}
