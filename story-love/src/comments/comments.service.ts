import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
}
