import { Injectable } from '@angular/core';
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
import decode from 'jwt-decode';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { UserInformationService } from '../userService/user-information.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticateService {

  user: User;

  constructor(
    private _userInformationService: UserInformationService,
  ) {
    this.getInfo();
   }

   getInfo(){
    if (localStorage.getItem("user") !=null){
      this.user = getUserFromLocalStorage();
     }
   }
  
  isUser() {
    if (localStorage.getItem("user") !=null){
      const role = this.user.role;
      if (role.name == "User") {
        return true;
      } else {
        return false;
      }
    }
  }

  isJournalist() {
    if (localStorage.getItem("user") !=null){
    const role = this.user.role;
    if (role.name == "Journalist") {
      return true;
    } else {
      return false;
    }
  }
  }

  isAdministrator() {
    if (localStorage.getItem("user") !=null){
    const role = this.user.role;
    if (role.name == "Admin") {
      return true;
    } else {
      return false;
    }
  }
  }

  isLoggedIn(){
    if (localStorage.getItem("user") !=null){
      return true;
    } else {
      return false;
    }
  }

  isNotLoggedIn(){
    if (localStorage.getItem("user") ==null){
      return true;
    } else {
      return false;
    }
  }

}