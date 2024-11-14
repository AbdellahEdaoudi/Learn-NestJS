
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll(): string {
    return 'users';
  }
}
@Controller('admin')
export class AdminController {
  @Get()
  findAll(): string {
    return 'Admin';
  }
}
