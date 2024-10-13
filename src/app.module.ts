import { Module } from '@nestjs/common';
import { CourtsModule } from './courts/courts.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CourtsModule, UsersModule, AuthModule],
  controllers: [AuthController],
  providers: [PrismaService, AuthService],
})
export class AppModule {}
