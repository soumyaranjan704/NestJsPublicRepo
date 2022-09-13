/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { employeePost } from 'src/emp';
import ResponseModel from 'src/rmq/responseModel';
import { DeleteResult } from 'typeorm';
import { CreateEmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import { EmployeeData } from './entities/employee.entity';
const amqp = require('amqplib/callback_api');

@Controller('employees')
export class EmployeeController {


  constructor(private employeeService: EmployeeService) {
     this.module_init();
    //this.module_delete();
  }
 
  async module_init() {
    //console.log("2")

    //1. create connection
    amqp.connect('amqp://localhost', (connErr, connection) => {
      if (connErr) {
        throw connErr;
      }

      //2. create channel
      connection.createChannel((channelError, channel) => {
        if (channelError) {
          throw channelError;
        }

        //3. assert QUEUE
        const QUEUE = 'firsttest2';
        channel.assertQueue(QUEUE);

        //4. recieve messages
        channel.consume(
          QUEUE,
          (msg) => {
            //var value = this.topicArray[0];
            // switch (QUEUE) {
            //   case 'firsttest2':
            //    // console.log('h');
            //     return this.employeeService.createEmployee(JSON.parse(msg.content));
            //     break;
            //   case 'delete':
            // }

            // console.log(JSON.parse(msg.content));
            return this.employeeService.createEmployee(JSON.parse(msg.content));
          },
          {
            noAck: true,
          },
        );
      });
    });
  }


//DELETE  CODE
  // async module_delete() {
  //   //1. create connection
  //  // console.log("1")
  //   amqp.connect('amqp://localhost', (connErr, connection) => {
  //     if (connErr) {
  //       throw connErr;
  //     }

  //     //2. create channel
  //     connection.createChannel((channelError, channel) => {
  //       if (channelError) {
  //         throw channelError;
  //       }

  //       //3. assert QUEUE
  //       const QUEUE = 'DELETE';
  //       channel.assertQueue(QUEUE);

  //       //4. recieve messages
  //       channel.consume(
  //         QUEUE,
  //         (msg) => {
  //           console.log(QUEUE);
  //           console.log(JSON.parse(msg.content));
  //           return this.employeeService.delete(JSON.parse(msg.content));
  //         },
  //         {
  //           noAck: true,
  //         },
  //       );
  //     });
  //   });
  // }





@Get()
findAll(): Promise < EmployeeData[] > {
  return this.employeeService.findAll();
}

  // @Post()
  // createEmployee(@Body() body : employeePost) {
  //   return this.employeeService.createEmployee(body);
  // }





  // @Delete(':id')
  // delete(@Param('id') id: number): Promise<DeleteResult> {
  //   return this.employeeService.remove(id);
  // }
}

