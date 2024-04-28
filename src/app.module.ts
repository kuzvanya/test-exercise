import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignupModule } from 'src/signup/signup.module';
import * as config from 'config';
import { User } from 'src/user/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Session } from 'src/session/session.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.get('typeORMDataSource'),
      entities: [User, Session],
    }),
    SignupModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
