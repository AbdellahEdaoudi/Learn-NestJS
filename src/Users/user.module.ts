
import { Module } from '@nestjs/common';
import {AdminController, UserController} from './user.controller'

@Module({
  controllers: [UserController,AdminController],
//   providers: [CatsService],
})
export class UserModule {}
