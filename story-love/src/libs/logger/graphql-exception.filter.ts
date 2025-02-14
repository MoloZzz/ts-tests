import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';
import { LoggerService } from './logger.service';

@Catch()
export class GraphQLExceptionFilter implements ExceptionFilter {
  constructor(private readonly loggerService: LoggerService) {}

  catch(exception: any, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const ctx = gqlHost.getContext();
    const req = ctx.req;

    const logData = {
      timestamp: new Date().toISOString(),
      clientIp: req?.headers['x-forwarded-for'] || req?.connection?.remoteAddress,
      host: req?.headers?.host,
      query: req?.body?.query,
      variables: req?.body?.variables,
      error: {
        message: exception.message,
        stack: exception.stack,
      },
      status: 'validation_error',
    };

    this.loggerService.logGraphQLRequest(logData);
  }
}
