import { Module } from '@nestjs/common';
import { CourtsModule } from './courts/courts.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CourtsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
