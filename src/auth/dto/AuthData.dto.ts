import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDataDto {
  @IsString()
  @ApiProperty({
    description: 'Логин',
    example: 'partymaker_2_0',
  })
  login: string;
  @IsString()
  @ApiProperty({
    description: 'Пароль',
    example: '123456',
  })
  password: string;
}
