import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // expor o PrimeService para outros modulos utlizarem
})
export class PrismaModule {}
