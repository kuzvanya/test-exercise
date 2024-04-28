import { Injectable } from '@nestjs/common';
import { SignupDataDto } from './dto/SignupData.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async process(data: SignupDataDto) {
    this.userRepository.save(data);
  }
}
