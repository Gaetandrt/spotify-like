import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './routes/auth/auth.module';
import * as Joi from 'joi';
import { GoogleStrategy } from './strategies/google.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaNextAuthModule } from './prisma/next_auth/prisma.module';
import { PrismaSupabaseModule } from './prisma-supabase/prisma-supabase.module';
import { ArtistsController } from './routes/artists/artists.controller';
import { ArtistsService } from './routes/artists/artists.service';
import { ArtistsModule } from './routes/artists/artists.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaClientExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './filters/http-transform.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        DIRECT_URL: Joi.string().required(),
        GOOGLE_CLIENT_ID: Joi.string().required(),
        GOOGLE_CLIENT_SECRET: Joi.string().required(),
        GOOGLE_CALLBACK_URL: Joi.string().required(),
        APP_JWT_SECRET: Joi.string().required()
      }),
    }),
    AuthModule,
    PassportModule,
    ArtistsModule,
    JwtModule.register({
      global: true,
    }),
    PrismaNextAuthModule,
    PrismaSupabaseModule,
  ],

  controllers: [AppController, ArtistsController],
  providers: [
    AppService,
    GoogleStrategy,
    JwtStrategy,
    ArtistsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: PrismaClientExceptionFilter,
    },
  ],
})
export class AppModule { }
