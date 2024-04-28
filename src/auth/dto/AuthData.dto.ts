import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDataDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Логин',
    example: 'partymaker_2_0',
  })
  login: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Пароль',
    example: '123456',
  })
  password: string;
}
