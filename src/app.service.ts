/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World6674!';
  }
  getUser(): string {  //return data in string format
    return 'User Page';
  }
  getUserHistory(): object { //return data as a object
    return {id :1,text :'Hi soumya'};
  }
  postUser(): string { 
    return ('User added successfully');
  }



}
