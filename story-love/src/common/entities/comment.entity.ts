import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Story } from './story.entity';
import { User } from './user.entity';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string;

  @Field()
  text: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => Story, { nullable: true })
  story?: Story;

  @Field(() => Comment, { nullable: true })
  parent?: Comment;

  @Field(() => [Comment])
  children: Comment[];
}
