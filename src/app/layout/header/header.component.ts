import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NgProgress } from 'ngx-progressbar';
import { Article } from 'src/app/models/article/article.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { RoleAuthenticateService } from 'src/app/services/authenticateService/roleAuthenticate.service';
import { TagService } from 'src/app/services/tagService/tag.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = new User("", "", "", "", "", "")
  tags: Tag[];
  articlesPublished: Article[];
  tag: Tag;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public roleAuthenticateService: RoleAuthenticateService,
    private alertService: AlertService,
    private tagService: TagService,
    private _articleService: ArticleService,
  ) {
    this.getTags();
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    localStorage.clear();
    this.alertService.success('U bent uitgelogd');
    this.router.navigate(['/home']);
  }

  
  getTags() {
    this.tagService.getTags().subscribe(
      result => {
        this.tags = result;
      }
    );
  }

  ngOnInit(): void {
  }

}



