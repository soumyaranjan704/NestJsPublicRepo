/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeData } from './entities/employee.entity';

@Module({
    //if any error comes to find this TypeOrmModule so you need to install this npm `npm i @nestjs/typeorm`.
  imports: [TypeOrmModule.forFeature([EmployeeData])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
