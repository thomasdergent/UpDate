import { Injectable } from '@angular/core';
import { getUserFromLocalStorage } from 'src/app/models/user/user.model';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthenticateService {

 user = getUserFromLocalStorage();

  constructor() { }

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
