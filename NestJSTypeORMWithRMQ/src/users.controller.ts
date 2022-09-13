/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string {
    return this.appService.getUser();
  }
  @Get('history')
  getUserHistory(): object {
    return this.appService.getUserHistory();
  }

  //POST
  @Post('users')
  postUser(@Body() record:any ):string{
    console.log(record)
    return this.appService.postUser();

  }

}
