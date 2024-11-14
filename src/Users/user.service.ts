import { Injectable } from "@nestjs/common";




@Injectable()
export class UserService{
    findAll(): string {
        return 'Hi I am abdellah edaoudi';
      }
}