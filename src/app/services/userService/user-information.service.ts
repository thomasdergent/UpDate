import { Injectable } from '@angular/core';
import { Role } from 'src/app/models/role/role.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private _userService: UserService) { }

  
  getUserInfo(_callback) {

    if (localStorage.getItem("token")!=null){

    
    setTimeout(function () {
      const userInfo = this._userService.decode();

      //from string to int
      const stringuserID = userInfo.userID;
      const userID: number = +stringuserID;

      const stringroleID = userInfo.roleID;
      const roleID: number = +stringroleID;

      const role: Role = new Role(roleID, userInfo.role);

      this.user = new CurrentUser(userID, userInfo.email, userInfo.firstName, userInfo.lastName, userInfo.userName, roleID, role );
      _callback(this.user as CurrentUser);

      
    }.bind(this), 0);
  }
  }
}