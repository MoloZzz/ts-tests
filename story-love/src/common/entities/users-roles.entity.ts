import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Role } from './role.entity';

@ObjectType()
export class UsersRoles {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  user: User;

  @Field(() => Role)
  role: Role;

  @Field(() => Date)
  createdAt: Date;
}
