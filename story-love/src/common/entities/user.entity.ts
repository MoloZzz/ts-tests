import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Credentials } from './credentials.entity';
import { Story } from './story.entity';
import { UsersRoles } from './users-roles.entity';
import { Comment } from './comment.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Credentials, { nullable: true })
  credentials?: Credentials;

  @Field(() => [Story])
  stories: Story[];

  @Field(() => [Comment])
  comments: Comment[];

  @Field(() => [UsersRoles])
  roles: UsersRoles[];
}
