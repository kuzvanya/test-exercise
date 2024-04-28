import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthDataDto } from 'src/auth/dto/AuthData.dto';
import { AuthResponseDto } from 'src/auth/dto/AuthResponse.dto';
import { AuthService } from 'src/auth/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Аутентификация' })
  @ApiBody({
    type: AuthDataDto,
  })
  @ApiResponse({
    type: AuthResponseDto,
  })
  async auth(@Body() data: AuthDataDto): Promise<AuthResponseDto> {
    return await this.authService.process(data);
  }
}
