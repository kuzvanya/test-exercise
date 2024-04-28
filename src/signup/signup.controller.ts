import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from 'src/signup/signup.service';
import { SignupDataDto } from 'src/signup/dto/SignupData.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('signup')
@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  @ApiOperation({ summary: 'Регистрация' })
  @ApiBody({
    type: SignupDataDto,
  })
  async signup(@Body() data: SignupDataDto): Promise<void> {
    return await this.signupService.process(data);
  }
}
