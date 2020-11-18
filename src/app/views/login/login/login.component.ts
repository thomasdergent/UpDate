import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticateService/authenticate.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { UserLogin } from 'src/app/models/user/user-login.model';
import { Router } from '@angular/router';
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loggedin: boolean = false;
  userLogin: UserLogin = new UserLogin('', '');

  constructor(
    private _authenticateService: AuthenticateService,
    private _userInformationService: UserInformationService,
    private alertService: AlertService,
    private router: Router) {

  }

  onSubmit() {
    this.alertService.info('Gebruiker ophalen');
    this.submitted = true;
    localStorage.clear();
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token)
      this.loggedin = true;

      localStorage.setItem("user", JSON.stringify(result))
    });

    setTimeout(function () {


      if (this.loggedin == false) {
        this.alertService.danger('Gebruikersnaam of wachtwoord is incorrect!');

        setTimeout(function () {
          window.location.reload();
        }.bind(this), 1500);
      } else {
        // const user = getUserFromLocalStorage();
        //  localStorage.setItem("userinformatie", JSON.stringify(user));

        this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
          if (localStorage.getItem("token") === null) {
            this.alertService.warning('Er ging iets fout!');
            window.location.reload();
          } else if (currentUser.role.name == "User") {
            this.alertService.success('Welkom terug ' + currentUser.userName + "!");
            setTimeout(function () {
              this.router.navigate(['/article']);
              setTimeout(() => {
                window.location.reload();
              }, 1600);
            }.bind(this), 1500);
          } else if (currentUser.role.name == "Journalist") {
            this.alertService.success('Welkom terug ' + currentUser.userName + "!");
            setTimeout(function () {
              this.router.navigate(['/article']);
              setTimeout(() => {
                window.location.reload();
              }, 1600);
            }.bind(this), 1500);
          } else if (currentUser.role.name == "Admin") {
            this.alertService.success('Welkom terug ' + currentUser.userName + "!");
            setTimeout(function () {
              this.router.navigate(['/admin/dashboard']);
              setTimeout(() => {
                window.location.reload();
              }, 1600);
            }.bind(this), 1500);

          }
          this.submitted = false;

        });
      }
    }.bind(this), 500);


  }

  ngOnInit(): void {
  }

}
