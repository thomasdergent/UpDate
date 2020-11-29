import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AlertService } from 'ngx-alerts';
import { Article } from 'src/app/models/article/article.model';
import { Articlestatus } from 'src/app/models/articlestatus/articlestatus.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { ArticleStatusService } from 'src/app/services/articleStatusService/article-status.service';
import { TagService } from 'src/app/services/tagService/tag.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  article: Article = new Article("", "", "", "", "", 0, null, 0, null, 0, null);
  tags: Tag[];
  selectedTag: number;
  articleStatusDraft: Articlestatus;
  articleStatusToReview: Articlestatus;
  currentUser: CurrentUser;
  currentTag: Tag;
  user: CurrentUser;
  loaded: boolean = false;
  spinner: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private _articleService: ArticleService,
    private _tagService: TagService,
    private _userInformationService: UserInformationService,
    private _articleStatusService: ArticleStatusService,
    private alertService: AlertService,
    private router: Router) {

    this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
      this.user = currentUser;
    });

    this.getTags();
  }

  loadArticle() {
    const articleTitle = this.route.snapshot.paramMap.get('title');
    this._articleService.getArticleByTitle(articleTitle).subscribe(
      result => {
        this.article = result;
        this.selectedTag = this.article.tagID;
        this.spinner = false;
        this.loaded = true;
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

  onChange($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    console.log(file);
    this.convertToBase64(file);

  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {

      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      console.log(d);
      this.article.image = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = () => {

      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }

  addArticleDraft() {
    //Ophalen van de geselecteerde id in de listbox
    this._tagService.getTagByID(this.selectedTag).subscribe(
      result => {
        this.currentTag = result;

        this._articleStatusService.getArticleStatusByID(1).subscribe(
          result => {
            this.articleStatusDraft = result;

            const article = new Article(this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body, this.article.image,
              this.currentTag.tagID, this.currentTag, this.user.userID, this.user, 1, this.articleStatusDraft, this.article.articleID)

            this._articleService.updateArticle(this.article.articleID, article).subscribe();
            this.alertService.success('Artikel opgeslagen');
            this.router.navigate(['/journalist/dashboard']);
          }
        );

      }
    );
  }

  addArticleToReview() {
    //Ophalen van de geselecteerde id in de listbox
    this._tagService.getTagByID(this.selectedTag).subscribe(
      result => {
        this.currentTag = result;

        this._articleStatusService.getArticleStatusByID(1).subscribe(
          result => {
            this.articleStatusToReview = result;
            const article = new Article(this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body, this.article.image,
              this.currentTag.tagID, this.currentTag, this.user.userID, this.user, 2, this.articleStatusToReview, this.article.articleID)

            this._articleService.updateArticle(this.article.articleID, article).subscribe();
            this.alertService.success('Artikel ingezonden');
            this.router.navigate(['/journalist/dashboard']);
          }
        );
      }
    );
  }

  ngOnInit(): void {
    this.loadArticle();
  }



}
