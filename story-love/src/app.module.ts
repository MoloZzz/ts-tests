import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`src/.env`],
      validationSchema: Joi.object({
        API_DOCS_ENABLED: Joi.string().optional(),
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
