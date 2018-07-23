import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../servives/employee.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  listeEmployees:any;

  constructor(public employeeservice:EmployeesService) { }

  ngOnInit() {
    this.charger()
  }

  charger(){
    this.employeeservice.getEmployees().subscribe((res:Response) => this.listeEmployees = res.json());
  }

}
