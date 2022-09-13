/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
//import{employees} from "./members"
// import employees from "./members";
const employees=[
  {
    id: 1,
    name: "jin",
  },
  {
    id: 2,
    name: "jerin",
  },
  {
    id: 3,
    name: "john",
  },
];
@Injectable()

export class AppService {
  getHello(): string {
    return 'Hello World55!';
  }
  getUser(): string {  //return data in string format
    return 'User Page';
  }
  getUserHistory(): object {
    return employees ;
  }
  postUser(): string {
    return ('User added successfully');
  }

}
