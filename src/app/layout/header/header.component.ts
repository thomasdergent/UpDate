import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
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


  constructor(
    private _userService: UserService,
    private _userInformationService: UserInformationService,
    private router: Router,
  ) {
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



