import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';

//ELK
@Injectable()
export class ContentService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
}
