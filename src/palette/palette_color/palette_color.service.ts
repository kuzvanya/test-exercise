import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaletteColor } from 'src/palette/palette_color/palette_color.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import * as config from 'config';
import { NotFoundError } from 'rxjs';
import { GetPaletteColorResponseDto } from 'src/palette/palette_color/dto/GetPaletteColorResponse.dto';
import { CreateColorDto } from 'src/palette/palette_color/dto/CreateColor.dto';
import { Palette } from 'src/palette/palette.entity';
import { GetPaletteColorListResponseDto } from 'src/palette/palette_color/dto/GetPaletteColorListResponse.dto';

@Injectable()
export class PaletteColorService {
  constructor(
    // private readonly paletteService: PaletteService,
    @InjectRepository(Palette)
    private readonly paletteRepository: Repository<Palette>,
    @InjectRepository(PaletteColor)
    private readonly paletteColorRepository: Repository<PaletteColor>,
  ) {}

  private readonly logger = new Logger('PaletteColorService');

  // Получение имени цвета со стороннего источника
  async _getColorName(hexValue: string): Promise<string> {
    const { data } = await axios({
      method: 'GET',
      baseURL: config.get('colorNameSourceUrl'),
      url: 'id',
      params: {
        hex: hexValue.slice(1),
      },
    }).catch((e) => {
      this.logger.error('Error while getting color name from source', e);
      throw new InternalServerErrorException('Can`t get color name. Sorry...');
    });

    const colorName = data?.name?.value;

    if (!colorName) {
      throw new NotFoundError('Color name not found');
    }

    return colorName;
  }

  async getListByPaletteId(paletteId): Promise<GetPaletteColorListResponseDto> {
    const colors = await this.paletteColorRepository.find({
      where: {
        palette_id: paletteId,
      },
      select: ['id', 'hex_value', 'name'],
    });

    return { palette_colors: colors };
  }

  async create(paletteId: number, data: CreateColorDto): Promise<void> {
    // Получаем имя цвета
    const colorName = await this._getColorName(data.hex_value);

    // Сохраняем
    await this.paletteColorRepository.save({
      ...data,
      palette_id: paletteId,
      name: colorName,
    });
  }

  async getOne(
    id: number,
    paletteId: number,
  ): Promise<GetPaletteColorResponseDto> {
    const color = await this.paletteColorRepository.findOne({
      where: {
        id,
        palette_id: paletteId,
      },
      select: ['palette_id', 'hex_value', 'name'],
    });

    if (!color) {
      throw new NotFoundException('Color not found');
    }

    return {
      palette_color: {
        hex_value: color.hex_value,
        name: color.name,
      },
    };
  }

  async checkExistsPaletteForUser(
    paletteId: number,
    userId: number,
  ): Promise<void> {
    const exists = await this.paletteRepository.exists({
      where: {
        id: paletteId,
        user_id: userId,
      },
    });

    if (!exists) {
      throw new NotFoundException('Palette not found');
    }
  }

  async update(
    id: number,
    paletteId: number,
    data: CreateColorDto,
  ): Promise<void> {
    const color = await this.paletteColorRepository.findOneBy({
      id,
      palette_id: paletteId,
    });
    if (!color) {
      throw new NotFoundError('Color not found');
    }

    // Получаем имя цвета
    const colorName = await this._getColorName(data.hex_value);

    // Сохраняем
    color.hex_value = data.hex_value;
    color.name = colorName;

    await this.paletteColorRepository.save(color);
  }

  async remove(id: number, paletteId: number): Promise<void> {
    const { affected } = await this.paletteColorRepository.delete({
      id,
      palette_id: paletteId,
    });

    if (!affected) {
      throw new NotFoundException('Color not found');
    }
  }
}
