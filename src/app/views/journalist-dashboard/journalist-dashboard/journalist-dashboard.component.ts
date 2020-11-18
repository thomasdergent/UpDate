import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { ArticleStatusService } from 'src/app/services/articleStatusService/article-status.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { Articlestatus } from 'src/app/models/articlestatus/articlestatus.model'
import { getUserFromLocalStorage } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-journalist-dashboard',
  templateUrl: './journalist-dashboard.component.html',
  styleUrls: ['./journalist-dashboard.component.scss']
})
export class JournalistDashboardComponent implements OnInit {

  articleStatus: Articlestatus;
  articles: Article[];
  currentArticle: Article = new Article(0, "", "", "", "", 0, null, 0, null, 0, null);
  onSubmitDeleteArticle: boolean = false;

  constructor(
    private _userInformationService: UserInformationService,
    private _articleService: ArticleService,
    private _articleStatusService: ArticleStatusService,
  ) {

    setTimeout(function () {
      this.getArticles();
    }.bind(this), 500);
  }

  user= getUserFromLocalStorage();

  getArticles() {
    this._articleService.getArticlesByUserID(this.user.userID).subscribe(
      result => {
        this.articles = result;
        localStorage.setItem("dlfkjdf", JSON.stringify(result));
      }
    );
  }

  openDeleteModal(id: number) {

    this._articleService.getArticleByID(id).subscribe(
      result => {
        this.currentArticle = result;

        localStorage.setItem("delete", JSON.stringify(result));
      }
    );

    let modal = document.getElementById('deleteArticle')
    modal.classList.remove('hidden')
    modal.classList.add('show')
  }

  deleteCurrentArticle() {
    this.onSubmitDeleteArticle = true;

    this._articleService.deleteArticle(this.currentArticle.articleID).subscribe();
    window.location.reload();
  }

  closeDelete() {
    let modal = document.getElementById('deleteArticle')
    modal.classList.remove('show')
    modal.classList.add('hidden')
  }

  ngOnInit(): void {
  }

}
