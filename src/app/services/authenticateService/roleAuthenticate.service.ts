import { Injectable } from '@angular/core';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { UserInformationService } from '../userService/user-information.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticateService {

  user: CurrentUser;
  boolean: boolean = false;

  constructor(
    private _userInformationService: UserInformationService,
  ) {
    
   this.getInfo();
   }

   getInfo(){
    if (localStorage.getItem("token") !=null){
    
      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        this.user=currentUser;
        
      });
     }
   }
  
  isUser() {
    if (localStorage.getItem("token")){
      const role = this.user.role;
      if (role.name == "User") {
        return true;
      } else {
        return false;
      }
    }
  }

  isJournalist() {
    if (localStorage.getItem("token")){
    const role = this.user.role;
    if (role.name == "Journalist") {
      return true;
    } else {
      return false;
    }
  }
  }

  isAdministrator() {
    if (localStorage.getItem("token")){
    const role = this.user.role;
    if (role.name == "Admin") {
      return true;
    } else {
      return false;
    }
  }
  }

  isLoggedIn(){
    if (localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }

  isNotLoggedIn(){
    if (!localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }

}