/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmployeeData } from './employee/entities/employee.entity';


export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '123Max1234',
  database: 'ExperimentDB',
  synchronize: true,
  entities: [EmployeeData],
};
