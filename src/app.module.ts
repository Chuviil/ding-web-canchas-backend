import { Module } from '@nestjs/common';
import { CourtsModule } from './courts/courts.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CourtsModule, UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
