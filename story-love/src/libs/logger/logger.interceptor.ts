import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable, tap } from 'rxjs';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class GraphQLLoggingInterceptor implements NestInterceptor {
  constructor(private readonly loggerService: LoggerService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const gqlCtx = GqlExecutionContext.create(context);
    const req = gqlCtx.getContext().req;

    const query = req?.body?.query;
    const variables = req?.body?.variables;
    const clientIp =
      req?.headers['x-forwarded-for'] || req?.connection?.remoteAddress;
    const host = req?.headers?.host;
    const startTime = Date.now();

    return next.handle().pipe(
      tap(async (response) => {
        const endTime = Date.now();
        const duration = endTime - startTime;

        const logData = {
          timestamp: new Date().toISOString(),
          clientIp,
          host,
          executionTime: `${duration}ms`,
          query,
          variables,
          response,
        };

        await this.loggerService.logGraphQLRequest(logData);
      }),
    );
  }
}
