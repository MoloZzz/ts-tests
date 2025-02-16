import { forwardRef, Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { PrismaModule } from 'src/libs/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [CommentsService, CommentsResolver],
})
export class CommentsModule {}
