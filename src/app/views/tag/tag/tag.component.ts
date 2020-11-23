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

    setTimeout(() => {
      this.loadTag();
    }, 250);

    setTimeout(() => {
      this.getTags();
    }, 500);

    setTimeout(() => {
      this.getArticlesPublishedByTagName();
    }, 500);
    
  }


  loadTag() {
    const tag = this.route.snapshot.paramMap.get('tagName');
    this._tagService.getTagByTagName(tag).subscribe(
      result => {
        this.tag = result;
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

  getArticlesPublishedByTagName() {
    this._articleService.getArticlesPublishedByTag(this.tag.name).subscribe(
      result => {
        this.articlesPublished = result;
      }
    );
  }

  loadNewTag(tagName: string) {
    this._tagService.getTagByTagName(tagName).subscribe(
      result => {
        this.tag = result;
      }
    );

    setTimeout(() => {
      this._articleService.getArticlesPublishedByTag(this.tag.name).subscribe(
        result=>{
          this.articlesPublished=result;
       
        }
      )
    }, 250);
   
    setTimeout(() => {
      this.router.navigate(['/home/categorie/', this.tag.name]);
    }, 500);
   
  }


  ngOnInit(): void {

  }

}
