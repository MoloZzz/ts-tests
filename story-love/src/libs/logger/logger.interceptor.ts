import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { LoggerService } from './logger.service';

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
        const duration = Date.now() - startTime;
        await this.loggerService.logGraphQLRequest({
          timestamp: new Date().toISOString(),
          clientIp,
          host,
          executionTime: `${duration}ms`,
          query,
          variables,
          response,
          status: 'success',
        });
      }),
      catchError(async (error) => {
        const duration = Date.now() - startTime;
        await this.loggerService.logGraphQLRequest({
          timestamp: new Date().toISOString(),
          clientIp,
          host,
          executionTime: `${duration}ms`,
          query,
          variables,
          error: error.message,
          stack: error.stack,
          status: 'error',
        });
        return throwError(() => error);
      }),
    );
  }
}
