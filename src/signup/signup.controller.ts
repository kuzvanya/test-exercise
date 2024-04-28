import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDataDto } from './dto/SignupData.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('signup')
@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  @ApiBody({
    type: SignupDataDto,
  })
  async signup(@Body() data: SignupDataDto): Promise<void> {
    return await this.signupService.process(data);
  }
}
