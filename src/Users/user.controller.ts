
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './Dto/create-user.dto';
import { RolesGuard } from './Guards/role.guard';
// import { ValidationLog } from './Validation/validationLog.pipe';

@Controller('user')
export class UserController {
  constructor(private userService:UserService){}

  @Get()
  @UseGuards(RolesGuard)
  async findAll(@Body(new ValidationPipe) createUser: CreateUser){
    console.log(createUser);
  }


  // @Get(":id")
  // async findOne(@Param("id",ValidationLog) id:number){
  //   console.log(id);
  // }
  
}