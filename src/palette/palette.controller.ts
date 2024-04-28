import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PaletteService } from 'src/palette/palette.service';
import { PaletteDataDto } from 'src/palette/dto/PaletteData.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPaletteListDto } from 'src/palette/dto/GetPaletteList.dto';
import { GetPaletteResponseDto } from 'src/palette/dto/GetPaletteResponse.dto';

@Controller('palettes')
@ApiTags('palletes')
export class PaletteController {
  constructor(private readonly paletteService: PaletteService) {}

  @Post()
  @ApiOperation({ summary: 'Создание палитры' })
  @UseGuards(AuthGuard)
  async create(@Body() data: PaletteDataDto, @Request() req): Promise<void> {
    return await this.paletteService.create(data, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Получение списка палитры' })
  @UseGuards(AuthGuard)
  @ApiResponse({ type: GetPaletteListDto })
  async getList(@Request() req): Promise<GetPaletteListDto> {
    return await this.paletteService.getList(req.user.id);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Обновление палитры' })
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: number,
    @Body() data: PaletteDataDto,
    @Request() req,
  ): Promise<void> {
    return this.paletteService.update(id, data, req.user.id);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Получение палитры' })
  @UseGuards(AuthGuard)
  @ApiResponse({ type: GetPaletteResponseDto })
  async getOne(
    @Param('id') id: number,
    @Request() req,
  ): Promise<GetPaletteResponseDto> {
    return this.paletteService.getOne(id, req.user.id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Получение палитры' })
  @UseGuards(AuthGuard)
  @ApiResponse({ type: GetPaletteResponseDto })
  async remove(@Param('id') id: number, @Request() req): Promise<void> {
    return await this.paletteService.remove(id, req.user.id);
  }
}
