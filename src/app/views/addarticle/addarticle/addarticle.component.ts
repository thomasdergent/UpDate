import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article.model';
import { Articlestatus } from 'src/app/models/articlestatus/articlestatus.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { TagService } from '../../../services/tagService/tag.service'
import { ArticleStatusService } from 'src/app/services/articleStatusService/article-status.service'
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

  article: Article = new Article(0, "", "", "", "", 0, 0, 0);
  currentUserID: number;
  tags: Tag[];
  currentTag: Tag;
  currentUser: CurrentUser;
  selectedTag: number;
  articleStatusDraft: Articlestatus;
  articleStatusToReview: Articlestatus;

  constructor(
    private _articleService: ArticleService,
    private _userInformationService: UserInformationService,
    private _articleStatusService: ArticleStatusService,
    private _tagService: TagService,
    private _userService: UserService,
  ) {


    this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
      this.currentUser = currentUser;
    });

    setTimeout(function () {
      this.getTags();
    }.bind(this), 500);
  }

  getTags() {
    this._tagService.getTags().subscribe(
      result => {
        this.tags = result;
        localStorage.setItem("tags", JSON.stringify(result))
      }
    );
  }

  //To Review
  getArticleStatusByIDToReview() {
    this._articleStatusService.getArticleStatusByID(2).subscribe(
      result => {
        this.articleStatusToReview = result;
      }
    );
  }

  addArticleDraft() {
    //Ophalen van de geselecteerde id in de listbox
    this._tagService.getTagByID(this.selectedTag).subscribe(
      result => {
        this.currentTag = result;
        localStorage.setItem("detag", JSON.stringify(result));
      }
    );

    setTimeout(function () {
      const article = new Article(0, this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body,
        this.currentTag.tagID, this.currentUser.userID, 1)
  
      this._articleService.addArticle(article).subscribe();

      localStorage.setItem("new article", JSON.stringify(article));

    }.bind(this), 1000);
  }

  addArticleToReview() {
      //Ophalen van de geselecteerde id in de listbox
      this._tagService.getTagByID(this.selectedTag).subscribe(
        result => {
          this.currentTag = result;
          localStorage.setItem("detag", JSON.stringify(result));
        }
      );
  
      setTimeout(function () {
        const article = new Article(0, this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body,
          this.currentTag.tagID, this.currentUser.userID, 2)
    
        this._articleService.addArticle(article).subscribe();
  
        localStorage.setItem("new article", JSON.stringify(article));
  
      }.bind(this), 1000);
  }

  ngOnInit(): void {
  }

}
