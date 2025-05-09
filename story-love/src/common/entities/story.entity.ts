import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { Comment } from './comment.entity';

@ObjectType()
export class Story {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => User, { nullable: true })
  author?: User;

  @Field(() => [Comment])
  comments?: Comment[];
}
