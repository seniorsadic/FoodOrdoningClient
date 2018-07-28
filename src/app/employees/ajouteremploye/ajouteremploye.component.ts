import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../servives/employee.services';
import { Router } from '@angular/router';
import { Employe } from '../../../model/model.employee';
import { Compte } from '../../../model/model.compte';
import { RestaurantService } from '../../../servives/restaurant.services';
import { CuisineService } from '../../../servives/cuisine.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-ajouteremploye',
  templateUrl: './ajouteremploye.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css']
})
export class AjouteremployeComponent implements OnInit {
  employe:Employe;
  compte:Compte
  listeCuisine:any;
  listeResto:any;
  constructor(public employeeservice:EmployeesService, public restoservice:RestaurantService,public cuisineservice:CuisineService, public router:Router) { }

  ngOnInit() {
    this.compte=new Compte();
    this.employe=new Employe();
    this.restoservice.getRestaurants().subscribe((res:Response) => this.listeResto = res.json());
    this.cuisineservice.getCuisine().subscribe((res:Response) => this.listeCuisine = res.json());
  }
  save(){
    this.employeeservice.saveEmployee(this.employe).subscribe((res:Response) => this.listeResto = res.json());
    this.employeeservice.saveEmployee(this.employe).subscribe((res:Response) => this.listeCuisine = res.json());
    console.log(this.employe);
    this.router.navigate(['/employees']);
  }
}
