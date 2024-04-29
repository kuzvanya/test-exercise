import { ApiProperty } from '@nestjs/swagger';
import { PaletteColorInstanceDto } from 'src/palette/palette_color/dto/PaletteColorInstance.dto';

export class GetPaletteColorListResponseDto {
  @ApiProperty({
    type: PaletteColorInstanceDto,
  })
  palette_colors: Array<PaletteColorInstanceDto>;
}
