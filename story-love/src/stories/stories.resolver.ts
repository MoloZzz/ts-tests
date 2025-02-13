import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StoriesService } from './stories.service';
import { Story } from '../common/entities/story.entity';
import { CreateStoryInput } from 'src/common/dto/create-story.input';

@Resolver(() => Story)
export class StoriesResolver {
  constructor(private readonly storiesService: StoriesService) {}

  @Mutation(() => Story)
  async createStory(
    @Args('createStoryInput') createStoryInput: CreateStoryInput,
  ): Promise<Story> {
    return await this.storiesService.create(createStoryInput);
  }

  @Query(() => [Story], { name: 'stories' })
  async findAll(): Promise<Story[]> {
    return await this.storiesService.findAll();
  }
}
