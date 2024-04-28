import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Palette } from 'src/palette/palette.entity';
import { Repository } from 'typeorm';
import { PaletteDataDto } from 'src/palette/dto/PaletteData.dto';
import { GetPaletteListDto } from 'src/palette/dto/GetPaletteList.dto';
import { GetPaletteResponseDto } from 'src/palette/dto/GetPaletteResponse.dto';

@Injectable()
export class PaletteService {
  constructor(
    @InjectRepository(Palette)
    private readonly paletteRepository: Repository<Palette>,
  ) {}

  async create(data: PaletteDataDto, userId: number): Promise<void> {
    await this.paletteRepository.save({
      ...data,
      user_id: userId,
    });
  }

  async getList(userId: number): Promise<GetPaletteListDto> {
    const palettes = await this.paletteRepository.find({
      where: {
        user_id: userId,
      },
      select: ['id', 'name'],
    });

    return { palettes };
  }

  async update(
    id: number,
    data: PaletteDataDto,
    userId: number,
  ): Promise<void> {
    const { affected } = await this.paletteRepository.update(
      {
        id,
        user_id: userId,
      },
      data,
    );
    if (affected === 0) {
      throw new NotFoundException('Palette not found');
    }
  }

  async getOne(id: number, userId: number): Promise<GetPaletteResponseDto> {
    const palette = await this.paletteRepository.findOne({
      where: {
        id,
        user_id: userId,
      },
      select: ['id', 'name'],
    });

    if (!palette) {
      throw new NotFoundException('Palette not found');
    }

    return {
      palette,
    };
  }

  async remove(id: number, userId: number): Promise<void> {
    const { affected } = await this.paletteRepository.delete({
      id,
      user_id: userId,
    });

    if (affected === 0) {
      throw new NotFoundException('Palette not found');
    }
  }
}
