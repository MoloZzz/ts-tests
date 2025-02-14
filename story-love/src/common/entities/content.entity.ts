import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Story } from './story.entity';

@ObjectType()
export class Content {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  elkId?: string;

  @Field({ nullable: true })
  elkIndex?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Story, { nullable: true })
  story?: Story;
}
