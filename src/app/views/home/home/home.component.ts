import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { TagService } from 'src/app/services/tagService/tag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tag: Tag;
  tags: Tag[];
  tagID: number;
  articlesPublished: Article[];
  articlesPublishedByLikes: Article[];

  constructor(
    private _tagService: TagService,
    private _articleService: ArticleService,
  ) {
    this.getTags();
    this.getArticlesPublished();
  }

  getTags() {
    this._tagService.getTags().subscribe(
      result => {
        this.tags = result;
      }
    )
  }

  getArticlesPublished() {
    this._articleService.getArticlesPublished().subscribe(
      result => {
        //reverse is omgekeerde array, slice is laatste items tonen met max getal
        this.articlesPublished = result.reverse().slice(0,15);
      }
    );
  }

  ngOnInit(): void {
  }

}
