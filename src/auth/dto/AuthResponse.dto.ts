import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({
    example: '4b744b49-bb81-42c0-bf9d-f35537970cbd',
  })
  token: string;
}
