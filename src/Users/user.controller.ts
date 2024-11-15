
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}
  // @Get()
  // logUser(){
  //   return this.userService.findAll()
  // }

  // Body
  @Get()
  getUser(@Body() body:any){
    console.log(body);
    // return this.userService.findUser()
  }
  // Param
  @Get(":id")
  getUser1(@Param("id") param:any){
    console.log(param);
    // return this.userService.findUser()
  }
  // Query
  @Post()
  getUser2(@Query() query:any){
    console.log(query);
    // return this.userService.findUser()
  }
  
}