import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { json, urlencoded } from 'express';
import { GraphQLLoggingInterceptor } from './libs/logger/logger.interceptor';
import { LoggerService } from './libs/logger/logger.service';
import { GraphQLExceptionFilter } from './libs/logger/graphql-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const loggerService = app.get(LoggerService);
  app.useGlobalInterceptors(new GraphQLLoggingInterceptor(loggerService));
  app.useGlobalFilters(new GraphQLExceptionFilter(loggerService));

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  app.enableCors({
    origin: '*',
    credentials: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);
}
bootstrap();
