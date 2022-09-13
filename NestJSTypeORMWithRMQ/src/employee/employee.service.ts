/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { employeePost } from 'src/emp';
import { DeleteResult, Repository } from 'typeorm';
import { EmployeeData } from './entities/employee.entity';

@Injectable()

export class EmployeeService {

  constructor(
    @InjectRepository(EmployeeData) private readonly repo: Repository<EmployeeData>,
  ){}

  findAll(): Promise<EmployeeData[]> {
    return this.repo.find();
  }

  createEmployee(body: employeePost): Promise<EmployeeData> {
    //console.log(body)
    const emp: EmployeeData = new EmployeeData();
    emp.name = body.name;
    emp.age = body.age;
    console.log(emp);

    return this.repo.save(emp);
  } 

  // createEmployee(body: employeePost):Observable<Employee> {
  //   const emp: Employee = new Employee();

  //   emp.name = body.name;
  //   emp.age=body.age;
  //   const empinfo = this.repo.create();
  //   empinfo.employee = emp;
  //   this.repo.save(empinfo);

  //   return from(this.repo.save(emp)) ;
  // }




  delete(id: number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }
}
