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
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

  article: Article = new Article("", "", "", "", "",0, null, 0, null, 0, null);
  currentUserID: number;
  tags: Tag[];
  currentTag: Tag;
  currentUser: CurrentUser;
  selectedTag: number;
  articleStatusDraft: Articlestatus;
  articleStatusToReview: Articlestatus;
  myImage;

  constructor(
    private _articleService: ArticleService,
    private _userInformationService: UserInformationService,
    private _articleStatusService: ArticleStatusService,
    private _tagService: TagService,
    private _userService: UserService,
    private router: Router,
    private alertService: AlertService,
  ) {


    this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
      this.currentUser = currentUser;
    });

    this.getTags();
  }

  user = getUserFromLocalStorage();

  getTags() {
    this._tagService.getTags().subscribe(
      result => {
        this.tags = result;
      }
    );
  }

  
  onChange($event: Event){
    const file = ($event.target as HTMLInputElement).files[0];
    console.log(file);
    this.convertToBase64(file);

  }

  convertToBase64(file:File){
    const observable = new Observable((subscriber: Subscriber<any>) =>{

      this.readFile(file, subscriber);
    });
    observable.subscribe((d) =>{
      console.log(d);
      this.myImage= d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader=new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = ()=>{

      subscriber.next(filereader.result); 
      subscriber.complete();
    };

    filereader.onerror = (error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
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

        this._articleStatusService.getArticleStatusByID(1).subscribe(
          result => {
            this.articleStatusDraft = result;

            const article = new Article(this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body, this.myImage,
              this.currentTag.tagID, this.currentTag, this.user.userID, this.user, 1, this.articleStatusDraft)

            this._articleService.addArticle(article).subscribe();

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

            const article = new Article(this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body, this.myImage,
              this.currentTag.tagID, this.currentTag, this.user.userID, this.user, 2, this.articleStatusToReview)

            this._articleService.addArticle(article).subscribe();

            this.alertService.success('Artikel ingezonden');
            this.router.navigate(['/journalist/dashboard']);
          }
        );

      }
    );
  
  }

  ngOnInit(): void {
  }

}
