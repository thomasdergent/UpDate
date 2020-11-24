import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article/article.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { TagService } from 'src/app/services/tagService/tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  articlesPublished: Article[];
  tag: Tag;
  tags: Tag[];

  constructor(
    private _tagService: TagService,
    private _articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    this.loadTag();
      this.getTags();
    
  }

  getArticlesPublishedByTagName() {
    this._articleService.getArticlesPublishedByTag(this.tag.name).subscribe(
      result => {
        this.articlesPublished = result;
      }
    );
  }

  loadTag() {
    const tag = this.route.snapshot.paramMap.get('tagName');
    this._tagService.getTagByTagName(tag).subscribe(
      result => {
        this.tag = result;

        this.getArticlesPublishedByTagName();
      }
    );
  }

  getTags() {
    this._tagService.getTags().subscribe(
      result => {
        this.tags = result;
      }
    );
  }

  loadNewTag(tagName: string) {
    this._tagService.getTagByTagName(tagName).subscribe(
      result => {
        this.tag = result;

        this.getArticlesPublishedByTagName();
        this.router.navigate(['/home/categorie/', this.tag.name]);
      }
    );

    }


  ngOnInit(): void {

  }

}
