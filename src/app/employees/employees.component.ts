import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../servives/employee.services';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  listeemployees:any
  constructor(public employeeservice:EmployeesService,public router:Router) { }

  ngOnInit() {
    this.charger()
  }
  charger(){
    this.employeeservice.getEmployees().subscribe((res:Response) => this.listeemployees = res.json());
  }

  onEditEmployee(id:number){
    this.router.navigate(['/modifieremploye',id]);
  }

  onDeleteEmployee(id:number){
    var resultat;
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé!",
      icon:"warning"
    })
    .then((willDelete) => {
      if (willDelete) {
        this.employeeservice.deleteEmployee(id).subscribe((res:Response) => resultat = res.json());
        console.log(resultat);
          swal("Poof! Employee supprimé !", {
            icon: "success",
          });
          this.charger();      
      } else {
        swal("Employee non supprimé !");
      }
    });
  }

}
