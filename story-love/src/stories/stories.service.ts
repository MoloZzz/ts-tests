import { Inject, Injectable } from '@nestjs/common';
import { CreateStoryInput } from '../common/dto/create-story.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StoriesService {
    constructor(@Inject(PrismaService) private prisma: PrismaService) {}

    async create(data : CreateStoryInput) {
      return this.prisma.story.create({ data });
    }
  
    async findAll() {
      return this.prisma.story.findMany();
    }
}
