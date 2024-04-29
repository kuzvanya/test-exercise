import { Module } from '@nestjs/common';
import { PaletteColorController } from 'src/palette/palette_color/palette_color.controller';
import { PaletteColorService } from 'src/palette/palette_color/palette_color.service';
import { PaletteService } from 'src/palette/palette.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaletteColor } from 'src/palette/palette_color/palette_color.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Palette } from 'src/palette/palette.entity';

@Module({
  controllers: [PaletteColorController],
  providers: [PaletteColorService, PaletteService],
  imports: [AuthModule, TypeOrmModule.forFeature([PaletteColor, Palette])],
})
export class PaletteColorModule {}
