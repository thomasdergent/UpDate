import { Injectable } from '@angular/core';
import { getUserFromLocalStorage } from 'src/app/models/user/user.model';
import decode from 'jwt-decode';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { UserInformationService } from '../userService/user-information.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticateService {

 user = getUserFromLocalStorage();
 currentUser: CurrentUser;

  constructor(
    private _userInformationService: UserInformationService,
  ) {
    this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
      this.currentUser = currentUser;
    });
   }

  isUser() {
    const role = this.user.role;
    if (role.name == "User") {
      return true;
    } else {
      return false;
    }
  }

  isJournalist() {
    const role = this.user.role;
    if (role.name == "Journalist") {
      return true;
    } else {
      return false;
    }
  }

  isAdministrator() {
    const role = this.user.role;
    if (role.name == "Admin") {
      return true;
    } else {
      return false;
    }
  }
}
