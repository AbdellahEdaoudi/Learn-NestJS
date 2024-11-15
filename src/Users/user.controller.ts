
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationLog } from './Validation/validationLog.pipe';

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
  // Pipes
  @Get(":id")
  getUser0(@Param("id",ParseIntPipe) id:number){
    console.log(id);
    // return this.userService.findUser()
  }

  // Param
  @Get(":id")
  getUser1(@Param("id",ValidationLog) param:any){
    console.log(`this is Log 2 : ${param}`);
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