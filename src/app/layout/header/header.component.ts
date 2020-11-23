import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag/tag.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
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

  loggedIn: boolean = false;
  userAdministrator = false;
  currentUser: CurrentUser;
  user: User = new User(0, "", "", "", "", "", "", 0, null);
  notLoggedIn: boolean = false;
  notSignedUp: boolean = false;
  tags: Tag[];


  constructor(
    private _userService: UserService,
    private _userInformationService: UserInformationService,
    private _tagService: TagService,
    private router: Router,
  ) {
    this.getTags();
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    window.location.reload();
  }

  getTags(){
    this._tagService.getTags().subscribe(
      result=>{
        this.tags=result;
      }
    );
  }

  ngOnInit(): void {
    this.user = getUserFromLocalStorage();

    if (localStorage != null) {
      this.notLoggedIn = true;
      this.loggedIn=true;
    }

    if (localStorage != null && this.loggedIn==true) {
      this.notSignedUp = true;
    }

  }

}



