/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users.controller';

@Module({
  imports: [],
  controllers: [AppController,UserController],
  providers: [AppService],
})
export class AppModule {}
