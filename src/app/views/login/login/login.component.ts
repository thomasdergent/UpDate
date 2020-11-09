import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticateService/authenticate.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { UserLogin } from 'src/app/models/user/user-login.model';
import { Router } from '@angular/router';
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  wrong: boolean = false;
  userLogin: UserLogin = new UserLogin('', '');

  constructor(
    private _authenticateService: AuthenticateService,
    private _userInformationService: UserInformationService,
    private router: Router) {

  }

  onSubmit() {
    this.submitted = true;
    localStorage.clear();
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token)
     // localStorage.setItem("user", JSON.stringify(result))
    });

    setTimeout(function () {


     // const user = getUserFromLocalStorage();
    //  localStorage.setItem("userinformatie", JSON.stringify(user));

     this._userInformationService.getUserInfo((currentUser : CurrentUser) => {
        if (localStorage.getItem("token") === null) {
        this.wrong = true;
      } else if (currentUser.role.name == "User") {
        this.router.navigate(['/article']);
      } else if (currentUser.role.name == "Journalist") {
        this.router.navigate(['/article']);
      } else if (currentUser.role.name == "Administrator") {
        this.router.navigate(['/article']);
      }
      this.submitted = false;

      });

      
    }.bind(this), 1000);

  }

  ngOnInit(): void {
  }

}
