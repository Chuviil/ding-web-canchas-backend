import { Body, Controller, Post } from '@nestjs/common';
import { LogInDto } from './dto/log-in.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly courtsService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LogInDto) {
    return this.courtsService.login(loginDto);
  }
}
