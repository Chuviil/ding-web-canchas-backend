import { Module } from '@nestjs/common';
import { CourtsModule } from './courts/courts.module';

@Module({
  imports: [CourtsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
