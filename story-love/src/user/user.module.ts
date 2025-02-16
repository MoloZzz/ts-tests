import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'src/libs/prisma/prisma.module';

@Module({
  imports:[forwardRef(() => PrismaModule)],
  providers: [UserService],
})
export class UserModule {}
