import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article.model';
import { ArticleService } from 'src/app/services/articleService/article.service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.scss']
})
export class ManageArticlesComponent implements OnInit {

  articles: Article[];
  loaded: boolean = false;
  spinner: boolean = true;

  constructor(
    private _articleService: ArticleService,
  ) {
    this.getArticlesToReview();
  }

  getArticlesToReview() {
    this._articleService.getArticlesToReview().subscribe(
      result => {
        this.articles = result.reverse();
        this.spinner = false;
        this.loaded = true;
      })
  }

  ngOnInit(): void {
  }

}
