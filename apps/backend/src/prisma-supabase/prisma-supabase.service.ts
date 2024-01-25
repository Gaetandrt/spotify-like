// prisma-supabase.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/next_auth';

@Injectable()
export class PrismaSupabaseService extends PrismaClient {
  constructor(configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get('NEXT_AUTH_DIRECT_URL'),
        },
      },
    });
  }

}
