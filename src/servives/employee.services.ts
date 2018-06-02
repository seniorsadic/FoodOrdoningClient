import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Employe } from '../model/model.employee';
import { Compte } from '../model/model.compte';

@Injectable()
export class EmployeesService {

  URl:string="http://www.sadicomputing.com/FoodOrdering/web/";

  constructor(public http: Http) {}

  getEmployees() {
    return this.http.get(this.URl+"employes");
  }
 
  getEmployeeById(id:number) {
    return this.http.get(this.URl+"employes/"+id);
  }

  saveEmployee(employe:Employe) {
    return this.http.post(this.URl+"employes",employe);
  }

  updateEmployee(employe:Employe) {
    return this.http.put(this.URl+"employes/"+employe.id_employe,employe);
  }

  deleteEmployee(id:number) {
    return this.http.delete(this.URl+"employes/"+id);
  }

  getComptes() {
    return this.http.get(this.URl+"comptes");
  }
  getCompteById(id:number) {
    return this.http.get(this.URl+"comptes/"+id);
  }
  saveCompte(compte:Compte) {
    return this.http.post(this.URl+"comptes",compte);
  }
  updateCompte(compte:Compte) {
    return this.http.put(this.URl+"comptes/"+compte.id_compte,compte);
  }

  deleteCompte(id:number) {
    return this.http.delete(this.URl+"comptes/"+id);
  }
}