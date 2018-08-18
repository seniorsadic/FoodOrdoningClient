import { Component, OnInit} from '@angular/core';
import { ReportCommandeService } from '../../servives/reportcommande.services';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { CategorieService } from '../../servives/categorie.services';
import { EmployeesService } from '../../servives/employee.services';
import { DatePipe } from '@angular/common'
import { ArticleService } from '../../servives/article.services';

@Component({
  selector: 'app-reportcommande',
  templateUrl: './reportcommande.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class ReportcommandeComponent implements OnInit {

  reportCommandeResults:any;
  listeCategoies:any;
  listeServeurs:any;
  listeArticles:any;
  categories:string='Plats du jour';
  employe:string='';
  datecommande:string='';
  // lineChart
  public barChartData:Array<any>=[];
  public barChartLabels:Array<any>=[];
  public pieChartData:Array<any>=[];

  //public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public ChartType:string = 'bar';
  public chartPieType:string='pie';
  // public randomizeType():void {
  //   this.ChartType = this.ChartType === 'line' ? 'bar' : 'bar';
  // }
  public chartOptions:any = {
    responsive: true
};
public chartColors:Array<any> = [{
  hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
  hoverBorderWidth: 0,
  backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
  hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
}];
  listeCommandeRepo:Array<any>=[];
  public listeCategoriesCommandeRepo=[];
  public listeQuantiteCommandeRepo=[];
  public listeMontantCommandeRepo=[];
  listquantite:Array<any>=[];
  listelements:Array<any>=[];

  constructor(public reportcommande:ReportCommandeService,public router:Router, 
    public categorie:CategorieService,public serveur:EmployeesService,public datepipe: DatePipe, public article:ArticleService) { }

  ngOnInit() {
    this.chargerCommande()
    this.chargerCategorie()
    this.chargerServeur()
    this.chargerArticle()
  
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
                else{
                  if(this.categories==valeur.categorie && this.employe=='' && this.datecommande==valeur.date.substring(0,10)){
                    return true;
                  }

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
    this.reportcommande.getReportCommande()
    .subscribe( data=>{
      this.reportCommandeResults=data;
      this.listecategorieQuantite();
      this.listecategorieMontant();
   });
  }
  chargerArticle(){
    this.article.getArticles().subscribe((res:Response) => this.listeArticles = res.json());
  }

  chargerCommande1(nom:string){
    this.categories=nom;
    this.listecategorieQuantite();
    this.listecategorieMontant();
  }

  chargerServeur1(nom:string)
  {
    this.employe=nom;
    this.listecategorieQuantite();
    this.listecategorieMontant();
  }

  chargerdate(nom:string){
    if (nom==''){
      
      this.datecommande=''
    }
    else{
      var event1 = new Date(nom)
      this.datecommande=this.datepipe.transform(event1, 'dd-MM-yyyy');
    }
    console.log(this.datecommande)
    this.listecategorieQuantite();
    this.listecategorieMontant();
  }

  listecategorieQuantite(){
    this.listeCommandeRepo =[];
    this.listeCategoriesCommandeRepo =[];
    this.listeQuantiteCommandeRepo =[];
    console.log(this.reportCommandeResults)

     if (this.datecommande!=''&&this.categories!=''&&this.employe!=''){
      
      for(var i =0; i < this.reportCommandeResults.length; i++){
        if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
           &&this.categories==this.reportCommandeResults[i].categorie&&this.employe==this.reportCommandeResults[i].nom){
            this.listeCommandeRepo.push(this.reportCommandeResults[i]);
        } 

      }
      for(var i =0; i < this.listeCommandeRepo.length; i++){
        if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
        
          this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
         
            this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
          } 
      }
    }
    else {
      if (this.datecommande!=''&&this.categories!=''&&this.employe==''){
      
        for(var i =0; i < this.reportCommandeResults.length; i++){
          if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
             &&this.categories==this.reportCommandeResults[i].categorie){
              this.listeCommandeRepo.push(this.reportCommandeResults[i]);
          } 
  
        }
        for(var i =0; i < this.listeCommandeRepo.length; i++){
          if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
          
            this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
           
              this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
            } 
        }
      }
      else {
        if (this.datecommande!=''&&this.categories==''&&this.employe==''){
        
          for(var i =0; i < this.reportCommandeResults.length; i++){
            if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
               ){
                this.listeCommandeRepo.push(this.reportCommandeResults[i]);
            } 
    
          }
          for(var i =0; i < this.listeCommandeRepo.length; i++){
            if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
            
              this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
             
                this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
              } 
          }
        }
        else{
          if (this.datecommande==''&&this.categories!=''&&this.employe!=''){
      
            for(var i =0; i < this.reportCommandeResults.length; i++){
              if (this.categories==this.reportCommandeResults[i].categorie&&this.employe==this.reportCommandeResults[i].nom){
                  this.listeCommandeRepo.push(this.reportCommandeResults[i]);
              } 
      
            }
            for(var i =0; i < this.listeCommandeRepo.length; i++){
              if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
              
                this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
               
                  this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                } 
            }
          }
          else{
            if (this.datecommande==''&&this.categories==''&&this.employe!=''){
      
              for(var i =0; i < this.reportCommandeResults.length; i++){
                if (this.employe==this.reportCommandeResults[i].nom){
                    this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                } 
        
              }
              for(var i =0; i < this.listeCommandeRepo.length; i++){
                if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                
                  this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                 
                    this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                  } 
              }
            }
            else{
              if (this.datecommande==''&&this.categories!=''&&this.employe==''){
      
                for(var i =0; i < this.reportCommandeResults.length; i++){
                  if (this.categories==this.reportCommandeResults[i].categorie){
                      this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                  } 
          
                }
                for(var i =0; i < this.listeCommandeRepo.length; i++){
                  if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                  
                    this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                   
                      this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                    } 
                }
              }
              else{
                if (this.datecommande!=''&&this.categories==''&&this.employe!=''){
      
                  for(var i =0; i < this.reportCommandeResults.length; i++){
                    if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
                       &&this.employe==this.reportCommandeResults[i].nom){
                        this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                    } 
            
                  }
                  for(var i =0; i < this.listeCommandeRepo.length; i++){
                    if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                    
                      this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                     
                        this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                      } 
                  }
                }
                else{
                  for(var i =0; i < this.reportCommandeResults.length; i++){
                    if (this.reportCommandeResults[i].categorie==this.categories){
                        this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                    }
                  } 
                  
                  for(var i =0; i < this.listeCommandeRepo.length; i++){
                    if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                    
                      this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                     
                        this.listeQuantiteCommandeRepo.push(this.calculerquantite(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                      } 
                  }
                }
              }
            }
          }
        }
    
  
      }
  

    }
    //this.barChartLabels.pop()
    this.pieChartData.pop()
   

    this.pieChartData.push(this.listeQuantiteCommandeRepo)
   
    console.log(this.barChartData)  
    

  }
  listecategorieMontant(){
    this.listeCommandeRepo =[];
    this.listeCategoriesCommandeRepo =[];
    this.listeMontantCommandeRepo =[];
    console.log(this.reportCommandeResults)

     if (this.datecommande!=''&&this.categories!=''&&this.employe!=''){
      
      for(var i =0; i < this.reportCommandeResults.length; i++){
        if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
           &&this.categories==this.reportCommandeResults[i].categorie&&this.employe==this.reportCommandeResults[i].nom){
            this.listeCommandeRepo.push(this.reportCommandeResults[i]);
        } 

      }
      for(var i =0; i < this.listeCommandeRepo.length; i++){
        if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
        
          this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
         
            this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
          } 
      }
    }
    else {
      if (this.datecommande!=''&&this.categories!=''&&this.employe==''){
      
        for(var i =0; i < this.reportCommandeResults.length; i++){
          if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
             &&this.categories==this.reportCommandeResults[i].categorie){
              this.listeCommandeRepo.push(this.reportCommandeResults[i]);
          } 
  
        }
        for(var i =0; i < this.listeCommandeRepo.length; i++){
          if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
          
            this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
           
              this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
            } 
        }
      }
      else {
        if (this.datecommande!=''&&this.categories==''&&this.employe==''){
        
          for(var i =0; i < this.reportCommandeResults.length; i++){
            if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
               ){
                this.listeCommandeRepo.push(this.reportCommandeResults[i]);
            } 
    
          }
          for(var i =0; i < this.listeCommandeRepo.length; i++){
            if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
            
              this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
             
                this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
              } 
          }
        }
        else{
          if (this.datecommande==''&&this.categories!=''&&this.employe!=''){
      
            for(var i =0; i < this.reportCommandeResults.length; i++){
              if (this.categories==this.reportCommandeResults[i].categorie&&this.employe==this.reportCommandeResults[i].nom){
                  this.listeCommandeRepo.push(this.reportCommandeResults[i]);
              } 
      
            }
            for(var i =0; i < this.listeCommandeRepo.length; i++){
              if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
              
                this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
               
                  this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                } 
            }
          }
          else{
            if (this.datecommande==''&&this.categories==''&&this.employe!=''){
      
              for(var i =0; i < this.reportCommandeResults.length; i++){
                if (this.employe==this.reportCommandeResults[i].nom){
                    this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                } 
        
              }
              for(var i =0; i < this.listeCommandeRepo.length; i++){
                if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                
                  this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                 
                    this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                  } 
              }
            }
            else{
              if (this.datecommande==''&&this.categories!=''&&this.employe==''){
      
                for(var i =0; i < this.reportCommandeResults.length; i++){
                  if (this.categories==this.reportCommandeResults[i].categorie){
                      this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                  } 
          
                }
                for(var i =0; i < this.listeCommandeRepo.length; i++){
                  if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                  
                    this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                   
                      this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                    } 
                }
              }
              else{
                if (this.datecommande!=''&&this.categories==''&&this.employe!=''){
      
                  for(var i =0; i < this.reportCommandeResults.length; i++){
                    if (this.datecommande==this.reportCommandeResults[i].date.substring(0,10)
                       &&this.employe==this.reportCommandeResults[i].nom){
                        this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                    } 
            
                  }
                  for(var i =0; i < this.listeCommandeRepo.length; i++){
                    if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                    
                      this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                     
                        this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                      } 
                  }
                }
                else{
                  for(var i =0; i < this.reportCommandeResults.length; i++){
                    if (this.reportCommandeResults[i].categorie==this.categories){
                        this.listeCommandeRepo.push(this.reportCommandeResults[i]);
                    }
                  } 
                  
                  for(var i =0; i < this.listeCommandeRepo.length; i++){
                    if(this.verifiercategorie(this.listeCategoriesCommandeRepo,this.listeCommandeRepo[i].designation)){
                    
                      this.listeCategoriesCommandeRepo.push(this.listeCommandeRepo[i].designation);
                     
                        this.listeMontantCommandeRepo.push(this.calculerMontant(this.listeCommandeRepo,this.listeCommandeRepo[i].designation));
                      } 
                  }
                }
              }
            }
          }
        }
    
  
      }
  

    }
    //this.barChartLabels.pop()
    
    this.barChartData.pop()
    this.barChartData.push({data:this.listeMontantCommandeRepo, label:'Montant Total'})
  
    

  }

verifiercategorie(liste:any,valeur:string){
  var bool=true
    for(var i =0; i < liste.length; i++){
      if(liste[i]==valeur)
          bool= false;
    }
    return bool
    
  }

  calculerquantite(liste:any,valeur:string){
    var quantite=0
    for(var i =0; i < liste.length; i++){
      if(liste[i].designation==valeur)
      quantite= quantite + parseInt(liste[i].quantite);
          
    }
    
    return quantite;
  }
  calculerMontant(liste:any,valeur:string){
    var montant=0.00
    for(var i =0; i < liste.length; i++){
      if(liste[i].designation==valeur)
      montant= montant + parseInt(liste[i].prixTotal);
          
    }
    
    return montant;
  }
}
