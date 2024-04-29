import { Module } from '@nestjs/common';
import { PaletteController } from 'src/palette/palette.controller';
import { PaletteService } from 'src/palette/palette.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palette } from 'src/palette/palette.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PaletteColorModule } from 'src/palette/palette_color/palette_color.module';

@Module({
  controllers: [PaletteController],
  providers: [PaletteService],
  imports: [
    TypeOrmModule.forFeature([Palette]),
    AuthModule,
    PaletteColorModule,
  ],
  exports: [PaletteService, TypeOrmModule],
})
export class PaletteModule {}
