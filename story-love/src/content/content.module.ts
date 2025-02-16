import { forwardRef, Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { PrismaModule } from 'src/libs/prisma/prisma.module';

@Module({
  imports: [forwardRef(() => PrismaModule)],
  providers: [ContentService],
})
export class ContentModule {}
