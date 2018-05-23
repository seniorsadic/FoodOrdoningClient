import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../servives/article.services";
import { Response } from '@angular/http';
import { Article } from '../../../model/model.article';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent implements OnInit {

  liste:any;
  article:Article;

  constructor(public articleservice: ArticleService) { }

  ngOnInit() {
    this.article=new Article();
    this.articleservice.getArticles().subscribe((res:Response) => this.liste = res.json());
    this.articleservice.getArticleById(1).subscribe((res:Response) => this.article = res.json());
    console.log(this.article);
  } 
 
}
