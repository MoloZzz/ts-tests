import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoryInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  author: string;
}
