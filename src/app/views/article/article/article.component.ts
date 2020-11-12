import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article/article.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { getUserFromLocalStorage } from 'src/app/models/user/user.model';
import { ArticleService } from '../../../services/articleService/article.service';
import { UserInformationService } from '../../../services/userService/user-information.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: Article[];
  user: CurrentUser;

  constructor(
    private router: Router,
    private _articleService: ArticleService,
    private _userInformationService: UserInformationService
  ) {

    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
    }

    this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
      this.getArticlesOfUserID(currentUser.userID);
    });
  }

  getArticlesOfUserID(userId: number) {
    this._articleService.getArticlesByUserID(userId).subscribe(
      result => {
        //Slice betekent de laatste 5 items van de array, dus laatste 5 artikels (nieuwste)
        this.articles = result.slice(-5)

        for(let i = 0; i <result.length; i++){

        }
      }
    )
  }

  ngOnInit(): void {
  }

}
