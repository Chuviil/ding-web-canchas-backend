import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LogInDto } from './dto/log-in.dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async login(loginDto: LogInDto) {
    const userFound = await this.prismaService.user.findUnique({
      where: { email: loginDto.email },
    });
    if (!userFound) throw new NotFoundException(`User not found`);
    if (userFound.password !== loginDto.password)
      throw new ForbiddenException();
    return userFound;
  }
}
