import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignupModule } from 'src/signup/signup.module';
import * as config from 'config';
import { User } from 'src/user/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Session } from 'src/session/session.entity';
import { PaletteModule } from 'src/palette/palette.module';
import { Palette } from 'src/palette/palette.entity';
import { PaletteColor } from 'src/palette/palette_color/palette_color.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.get('typeORMDataSource'),
      entities: [User, Session, Palette, PaletteColor],
    }),
    SignupModule,
    AuthModule,
    PaletteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
