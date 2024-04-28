import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
  controllers: [SignupController],
  providers: [SignupService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class SignupModule {}
