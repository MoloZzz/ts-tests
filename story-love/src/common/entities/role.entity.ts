import { ObjectType, Field } from '@nestjs/graphql';
import { UsersRoles } from './users-roles.entity';

@ObjectType()
export class Role {
  @Field()
  code: string;

  @Field()
  label: string;

  @Field(() => [UsersRoles])
  users: UsersRoles[];
}
