import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from 'src/session/session.entity';
import { AuthDataDto } from 'src/auth/dto/AuthData.dto';
import { AuthResponseDto } from 'src/auth/dto/AuthResponse.dto';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import * as config from 'config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Аутентификация
   */
  async process(data: AuthDataDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findOneBy(data);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const session = await this.sessionRepository.save({
      user_id: user.id,
      token: uuidv4(),
      expired_at: moment().add(config.get('sessionTTL'), 'days'),
    });

    return { token: session.token };
  }
}
