import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UsersRoles } from './users-roles.entity';

@ObjectType()
export class Role {
  @Field(() => ID)
  code: string;

  @Field()
  label: string;

  @Field(() => [UsersRoles])
  users: UsersRoles[];
}
