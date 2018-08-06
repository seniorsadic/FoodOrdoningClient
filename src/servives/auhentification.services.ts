import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Article} from "../model/model.article";

@Injectable()
export class AuthentificationService {

    URl:string="http://www.sadicomputing.com/FoodOrdering/web/";

    constructor(public http: HttpClient) {}

    connection(login:string, motpasse:string){
        var comptes;
        var attribut=[];
        attribut.push('login',login);
        attribut.push('password',motpasse);
        return this.http.post(this.URl+"loginandpassword",attribut)
        .subscribe( data=>{
           return  comptes=data;
        });
    }

    tester(){
        localStorage.setItem('nom','Aziz')
        localStorage.setItem('prenom','Aziz')
    }
}