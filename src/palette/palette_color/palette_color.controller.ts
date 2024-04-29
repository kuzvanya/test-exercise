import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PaletteColorService } from 'src/palette/palette_color/palette_color.service';
import { CreateColorDto } from 'src/palette/palette_color/dto/CreateColor.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPaletteColorResponseDto } from 'src/palette/palette_color/dto/GetPaletteColorResponse.dto';
import { PaletteExistsGuard } from 'src/palette/palette_color/paletteExists.guard';
import { GetPaletteColorListResponseDto } from 'src/palette/palette_color/dto/GetPaletteColorListResponse.dto';

@Controller('/palettes/:paletteId/colors')
@ApiTags('palettes')
@UseGuards(PaletteExistsGuard)
@UseGuards(AuthGuard)
export class PaletteColorController {
  constructor(private readonly paletteColorService: PaletteColorService) {}

  @Get()
  @ApiOperation({ summary: 'Получение списка цветов в палитре' })
  @ApiResponse({ type: GetPaletteColorListResponseDto })
  async getList(
    @Param('paletteId') paletteId: number,
  ): Promise<GetPaletteColorListResponseDto> {
    return await this.paletteColorService.getListByPaletteId(paletteId);
  }

  @Post()
  @ApiOperation({ summary: 'Добавление цвета в палитру' })
  @ApiBody({ type: CreateColorDto })
  async create(
    @Param('paletteId') paletteId: number,
    @Body() data: CreateColorDto,
  ): Promise<void> {
    return this.paletteColorService.create(paletteId, data);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Получение цвета' })
  @ApiResponse({ type: GetPaletteColorResponseDto })
  async getOne(
    @Param('id') id: number,
    @Param('paletteId') paletteId: number,
  ): Promise<GetPaletteColorResponseDto> {
    return this.paletteColorService.getOne(id, paletteId);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Обновление цвета' })
  @ApiBody({ type: CreateColorDto })
  async update(
    @Param('id') id: number,
    @Param('paletteId') paletteId: number,
    @Body() data: CreateColorDto,
  ): Promise<void> {
    return await this.paletteColorService.update(id, paletteId, data);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Удаление цвета' })
  async remove(
    @Param('id') id: number,
    @Param('paletteId') paletteId: number,
  ): Promise<void> {
    return await this.paletteColorService.remove(id, paletteId);
  }
}
