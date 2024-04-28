import { Module } from '@nestjs/common';
import { PaletteController } from 'src/palette/palette.controller';
import { PaletteService } from 'src/palette/palette.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palette } from 'src/palette/palette.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PaletteController],
  providers: [PaletteService],
  imports: [TypeOrmModule.forFeature([Palette]), AuthModule],
})
export class PaletteModule {}
