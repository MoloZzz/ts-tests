import { Inject, Injectable } from '@nestjs/common';
import { CreateStoryInput } from '../common/dto/create-story.input';
import { PrismaService } from '../libs/prisma/prisma.service';
import { Story } from 'src/common/entities/story.entity';

@Injectable()
export class StoriesService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(data: CreateStoryInput) {
    return this.prisma.story.create({
      data: {
        title: data.title,
        author: {
          connect: { id: data.authorId },
        },
      },
    });
  }

  async findAll() {
    // : Promise<Story[]>
    const stories = await this.prisma.story.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
    console.log(stories);
    return stories.map((story) => ({
      ...story,
      author: story.author ? { ...story.author } : null,
    }));
  }
}
