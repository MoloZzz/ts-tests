import { forwardRef, Module } from '@nestjs/common';
import { StoriesResolver } from './stories.resolver';
import { StoriesService } from './stories.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [StoriesResolver, StoriesService],
})
export class StoriesModule {}
