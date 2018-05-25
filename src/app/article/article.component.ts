import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../servives/article.services';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  listearticles:any;

  constructor(public articleservice:ArticleService,public router:Router) { }

  ngOnInit() {
    this.charger();
  }

  charger(){
    this.articleservice.getArticles().subscribe((res:Response) => this.listearticles = res.json());
  }

  onEditArticle(id:number){
    this.router.navigate(['/modifierarticle',id]);
  }

  onDeleteArticle(id:number){
    var resultat;
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé!",
      icon:"warning"
    })
    .then((willDelete) => {
      if (willDelete) {
        this.articleservice.deleteArticle(id).subscribe((res:Response) => resultat = res.json());
        console.log(resultat);
          swal("Poof! Article supprimé !", {
            icon: "success",
          });
          this.charger();      
      } else {
        swal("Article non supprimé !");
      }
    });
  }

}
