import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  
  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true, // then validator will strip validated object of any properties that do not have any decorators (ValidatorOptions)
        transform: true, // allow automatic transformation of incoming data (ValidationPipeOptions)
        transformOptions: {
            enableImplicitConversion: true, // enable transformation of data types (ClassTransformOptions)
        },
    }),
);
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
