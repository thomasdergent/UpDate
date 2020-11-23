import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article/article.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { TagService } from 'src/app/services/tagService/tag.service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.scss']
})
export class ManageArticlesComponent implements OnInit {

  articles: Article[];

  constructor(
    private _articleService: ArticleService,
    private _tagService: TagService,
    private router: Router,
  ) {
    setTimeout(() => {
      this.getArticlesToReview();
    }, 500);
  }

  getArticlesToReview() {
    this._articleService.getArticlesToReview().subscribe(
      result => {
        this.articles = result;
        localStorage.setItem("review", JSON.stringify(this.articles));
      })
  }


  ngOnInit(): void {
  }

}
