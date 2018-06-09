import { Component, OnInit } from '@angular/core';
import { ReportCommandeService } from '../../servives/reportcommande.services';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { CategorieService } from '../../servives/categorie.services';
import { EmployeesService } from '../../servives/employee.services';

@Component({
  selector: 'app-reportcommande',
  templateUrl: './reportcommande.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class ReportcommandeComponent implements OnInit {

  reportCommandeResults:any;
  listeCategoies:any;
  listeServeurs:any;
  categories:string='';
  date:string='';


  constructor(public reportcommande:ReportCommandeService,public router:Router, 
    public categorie:CategorieService,public serveur:EmployeesService) { }

  ngOnInit() {
    this.chargerCategorie()
    this.chargerServeur()
    this.chargerCommande()
    
  }

   chargerCategorie(){
    this.categorie.getCategories().subscribe((res:Response) => this.listeCategoies = res.json());
   }

   chargerServeur(){
    this.serveur.getEmployees().subscribe((res:Response) => this.listeServeurs = res.json());
   }

  chargerCommande(){
    this.reportcommande.getReportCommande().subscribe((res:Response) => this.reportCommandeResults = res.json());
  }

  chargerCommande1(nom:string){
    this.categories=nom;
    for(var i=0; i<this.reportCommandeResults.Length; i++){
      
    }
    console.log(this.categories)
    console.log(this.date)
  }

  charger2(nom:string)
  {
    this.date=nom;
    console.log(this.categories)
    console.log(this.date)
  }
}
