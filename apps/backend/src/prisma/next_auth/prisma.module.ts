import { Global, Module } from '@nestjs/common';
import { PrismaNextAuthService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaNextAuthService],
  exports: [PrismaNextAuthService]
})
export class PrismaNextAuthModule {}
