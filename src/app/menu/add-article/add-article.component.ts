import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../../model/model.article';
import { ArticleService } from '../../../servives/article.services';
import { Response } from '@angular/http';
import { Categorie } from '../../../model/model.categorie';
import { CategorieService } from '../../../servives/categorie.services';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  idCategorie:number;
  categorie:Categorie;
  article:Article;
  listes:any;

  constructor(public activatedRoute:ActivatedRoute,public articleservice:ArticleService, public router:Router, public categorieservice:CategorieService) { 
    this.idCategorie=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
      this.article=new Article();
      this.categorieservice.getCategorieById(this.idCategorie).subscribe((res:Response) => this.categorie = res.json());
      this.article.id_categorie=this.idCategorie;
  }

  save(){
    this.articleservice.saveArticle(this.article).subscribe((res:Response) => this.listes = res.json());
    console.log(this.article);
    this.router.navigate(['/menu']);
  }

}
