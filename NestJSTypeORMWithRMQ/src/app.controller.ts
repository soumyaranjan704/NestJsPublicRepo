/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//const amqp = require('amqplib/callback_api'); 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
   //this.rmqRec();
  }

  // async rmqRec(){
    
  //    //(Advanced Message Queuing Protocol) is a messaging protocol that enables conforming client applications to communicate with conforming messaging 
  //   //RabbitMQ code added
  //   //Step-1 :Create connection
  //   amqp.connect('amqp://localhost', function(error0, connection) {
  //     if (error0) {
  //       throw error0;
  //     }
  //     //Step-2:Create channel
  //     connection.createChannel(function(channelError, channel) {
  //       if (channelError) {
  //         throw channelError;
  //       }
    
  //         //Step-3: Assert QUEUE
  //         const QUEUE='firsttest2';
  //         channel.assertQueue(QUEUE);
    
  //         //Step-4: Recieve the message
  //         channel.consume(QUEUE,(msg)=>{
  //           console.log(`message recived:${msg.content}`)
  //         },{
  //           noAck:true,
  //         },);
    
      
  //   })
  //   })
  //}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
