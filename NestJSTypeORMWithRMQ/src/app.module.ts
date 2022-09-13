/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { EmployeeController } from './employee/employee.controller';
import { EmployeeModule } from './employee/employee.module';
//import { EmployeeService } from './employee/employee.service';
import { UserController } from './users.controller';
import { config } from './typeormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config),EmployeeModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
