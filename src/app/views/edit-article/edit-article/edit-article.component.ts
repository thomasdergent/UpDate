import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Article } from 'src/app/models/article/article.model';
import { Articlestatus } from 'src/app/models/articlestatus/articlestatus.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { getUserFromLocalStorage } from 'src/app/models/user/user.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { ArticleStatusService } from 'src/app/services/articleStatusService/article-status.service';
import { TagService } from 'src/app/services/tagService/tag.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  article: Article = new Article(0, "", "", "", "", 0, null, 0, null, 0, null);
  tags: Tag[];
  selectedTag: number;
  articleStatusDraft: Articlestatus;
  articleStatusToReview: Articlestatus;
  currentUser: CurrentUser;
  currentTag: Tag;

  constructor(
    private route: ActivatedRoute,
    private _articleService: ArticleService,
    private _tagService: TagService,
    private _userInformationService: UserInformationService,
    private _articleStatusService: ArticleStatusService,
    private router: Router) {
    this.getTags();
  }

  user = getUserFromLocalStorage();

  loadArticle() {
    const articleTitle = this.route.snapshot.paramMap.get('title');
    this._articleService.getArticleByTitle(articleTitle).subscribe(
      result => {
        this.article = result;
        this.selectedTag = this.article.tagID;
        localStorage.setItem("testarticle", JSON.stringify(result));
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

  addArticleDraft() {
    //Ophalen van de geselecteerde id in de listbox
    this._tagService.getTagByID(this.selectedTag).subscribe(
      result => {
        this.currentTag = result;
      }
    );

    this._articleStatusService.getArticleStatusByID(1).subscribe(
      result => {
        this.articleStatusDraft = result;
      }
    );

    setTimeout(function () {
      const article = new Article(this.article.articleID, this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body,
        this.currentTag.tagID, this.currentTag, this.user.userID, this.user, 1, this.articleStatusDraft)

      this._articleService.updateArticle(this.article.articleID, article).subscribe();
      this.router.navigate(['/journalist/dashboard']);

    }.bind(this), 1000);
  }

  addArticleToReview() {
    //Ophalen van de geselecteerde id in de listbox
    this._tagService.getTagByID(this.selectedTag).subscribe(
      result => {
        this.currentTag = result;
      }
    );

    this._articleStatusService.getArticleStatusByID(1).subscribe(
      result => {
        this.articleStatusToReview = result;
      }
    );

    setTimeout(function () {
      const article = new Article(this.article.articleID, this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body,
        this.currentTag.tagID, this.currentTag, this.user.userID, this.user, 2, this.articleStatusToReview)

      this._articleService.updateArticle(this.article.articleID, article).subscribe();

      this.router.navigate(['/journalist/dashboard']);
    }.bind(this), 1000);
  }

  ngOnInit(): void {
    this.loadArticle();
  }



}
