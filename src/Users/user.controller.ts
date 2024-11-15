
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}
  // @Get()
  // logUser(){
  //   return this.userService.findAll()
  // }

  @Get()
  getUser(){
    return this.userService.findUser()
  }
  
}