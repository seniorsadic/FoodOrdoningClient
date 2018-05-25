import { Component, OnInit } from '@angular/core';
import { Article } from '../../../model/model.article';
import { ArticleService } from '../../../servives/article.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {

  article:Article;
  idArticle:number;

  constructor(public articleservice:ArticleService,public activatedRoute:ActivatedRoute,public router:Router) {
    this.idArticle=activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.articleservice.getArticleById(this.idArticle).subscribe((res:Response) => this.article = res.json());
  }

  updateArticle(){
    this.articleservice.updateArticle(this.article).subscribe((res:Response) => this.article = res.json());
    console.log(this.article);
    this.router.navigate(['/articles']);
  }

}
