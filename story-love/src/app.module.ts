import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { StoriesModule } from './stories/stories.module';
import { PrismaModule } from './libs/prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { CommentsModule } from './comments/comments.module';
import { LoggerModule } from './libs/logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
      validationSchema: Joi.object({
        API_DOCS_ENABLED: Joi.string().optional(),
        PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    StoriesModule,
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      autoSchemaFile: true,
    }),
    CommentsModule,
    LoggerModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
