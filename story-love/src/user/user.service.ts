import { Inject, Injectable } from '@nestjs/common';
import { Role } from 'src/common/entities/role.entity';
import { RoleEnum } from 'src/common/enums/role-enum';
import { CreateUserDto } from 'src/common/inputs/create-user.dto';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        ...data,
        roles: {
          connect: [{ code: 'reader' }],
        },
      },
    });
  }
}
