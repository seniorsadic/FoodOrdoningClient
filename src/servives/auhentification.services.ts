import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Article} from "../model/model.article";
import { Connect } from '../model/model.connect';
import { Compte } from '../model/model.compte';
    

@Injectable()
export class AuthentificationService {

    URl:string="http://www.sadicomputing.com/FoodOrdering/web/";

    constructor(public http: HttpClient) {}

    connection(login:string, motpasse:string): Compte{
        var users;
        var comptes=new Connect();
        comptes.login=login;
        comptes.password=motpasse;
        this.http.post(this.URl+"loginandpassword",comptes)
        .subscribe( data=>{
            users=data;
            localStorage.clear();
            localStorage.setItem('nom',users.id_employe.prenom+' '+users.id_employe.nom)
            localStorage.setItem('login',users.login)
            localStorage.setItem('id',users.id_employe.id_employe)
            localStorage.setItem('role',users.role)
            localStorage.setItem('connect','true')
            localStorage.setItem('resto',users.id_employe.id_resto.id_resto)
           return  users=data;
        });
        return users;
    }

    deconnection(){
        localStorage.clear();
        localStorage.setItem('connect','false')
    }

    isconnect():boolean{
        if(localStorage.getItem('connect')=='true')
            return true;
        return false;
    }

    tester(){
    }
}

export const AUTH_PROVIDERS: Array<any> = [
    { provide: AuthentificationService, useClass: AuthentificationService }
  ];