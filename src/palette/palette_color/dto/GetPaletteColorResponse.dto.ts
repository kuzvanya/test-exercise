import { ApiProperty } from '@nestjs/swagger';
import { PaletteColorInstanceDto } from 'src/palette/palette_color/dto/PaletteColorInstance.dto';

export class GetPaletteColorResponseDto {
  @ApiProperty({ type: PaletteColorInstanceDto })
  palette_color: PaletteColorInstanceDto;
}
