import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  async ping(): Promise<string> {
    return 'pong';
  }
}
