import { Component, OnInit } from '@angular/core';
import { ReportCommandeService } from '../../servives/reportcommande.services';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { CategorieService } from '../../servives/categorie.services';
import { EmployeesService } from '../../servives/employee.services';
import { DatePipe } from '@angular/common'

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
  employe:string='';
  datecommande:string='';
  // lineChart
  public lineChartData:Array<any> = [];

  //public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
  
  listeCommandeRepo:Array<any>=[];
  listeCategoriesCommandeRepo:Array<any>=[];
  listeQuantiteCommandeRepo:Array<any>=[];

  constructor(public reportcommande:ReportCommandeService,public router:Router, 
    public categorie:CategorieService,public serveur:EmployeesService,public datepipe: DatePipe) { }

  ngOnInit() {
    this.chargerCategorie()
    this.chargerServeur()
    this.chargerCommande()
    this.listecategorie();
  }

  verifier(valeur:any){
    if (this.categories=='' && this.employe=='' && this.datecommande==''){
      return true;
    }
    else{
      if(this.categories==valeur.categorie && this.employe=='' && this.datecommande==''){
        return true;
      }
      else{
        if(this.categories==valeur.categorie && this.employe==valeur.nom && this.datecommande==''){
          return true;
        }
        else{
          if(this.categories=='' && this.employe==valeur.nom && this.datecommande==''){
            return true;
          }
          else{
            if(this.categories=='' && this.employe=='' && this.datecommande==valeur.date.substring(0,10)){
              return true;
            }
            else{
              if(this.categories=='' && this.employe==valeur.nom && this.datecommande==valeur.date.substring(0,10)){
                return true;
              }
              else{
                if(this.categories==valeur.categorie && this.employe==valeur.nom && this.datecommande==valeur.date.substring(0,10)){
                  return true;
                }
              }
            }
          }
        }
      }
    }
    return false;
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
  }

  chargerServeur1(nom:string)
  {
    this.employe=nom;
  }

  chargerdate(nom:string){
    if (nom==''){
      this.datecommande='';
    }
    else{
      var event1 = new Date(nom)
      this.datecommande=this.datepipe.transform(event1, 'dd-MM-yyyy');
    }
    console.log(this.datecommande)
    this.listecategorie()
  }

  listecategorie(){
    this.listeCommandeRepo =[];
    this.listeCategoriesCommandeRepo =[];
    this.listeQuantiteCommandeRepo =[];
    if (this.datecommande!=''){
      for(var i =0; i < this.reportCommandeResults.length; i++){
        if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)){
            this.listeCommandeRepo.push(this.reportCommandeResults[i]);
        }
      }
      for(var i =0; i < this.listeCommandeRepo.length; i++){
        if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].categorie)){
          this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].categorie);
          this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].categorie));
        }
      }
    }
    else{
      this.listeCommandeRepo=this.reportCommandeResults;
      for(var i =0; i < this.listeCommandeRepo.length; i++){
        if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].categorie)){
          this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].categorie);
          this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].categorie));
        }
      }
    }
    this.lineChartData.push(this.listeQuantiteCommandeRepo)
  }

  verifiercategorie(liste:any,valeur:string){
    for(var i =0; i < liste.length; i++){
      if(liste[i]==valeur)
          return false;
    }
    return true;
  }

  calculerquantite(liste:any,valeur:string){
    var quantite=0;
    for(var i =0; i < liste.length; i++){
      if(liste[i].categorie==valeur)
          quantite=quantite+parseInt(liste[i].quantite);
    }
    return quantite;
  }
 
}
