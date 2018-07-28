import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../../servives/employee.services';
import { Employe } from '../../../model/model.employee';
import { Response } from '@angular/http';

@Component({
  selector: 'app-modifieremploye',
  templateUrl: './modifieremploye.component.html',
  styleUrls: ['./modifieremploye.component.css']
})
export class ModifieremployeComponent implements OnInit {
  idEmploye:number;
  employe:Employe;
  constructor(public activatedRoute:ActivatedRoute,public employeesservice:EmployeesService,public router:Router) {
    this.idEmploye=activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.employeesservice.getEmployeeById(this.idEmploye).subscribe((res:Response) => this.employe = res.json());
  }

  modifier(){
    this.employeesservice.updateEmployee(this.employe).subscribe((res:Response) => this.employe = res.json());
    console.log(this.employe);
    this.router.navigate(['/employees']);
  }

  annuler(){
    this.router.navigate(['/employees']);
  }


}
