import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Story {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  author: string;

  @Field()
  createdAt: Date;
}
