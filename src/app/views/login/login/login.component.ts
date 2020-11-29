import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticateService/authenticate.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { UserLogin } from 'src/app/models/user/user-login.model';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { AlertService } from 'ngx-alerts';
import { RoleAuthenticateService } from 'src/app/services/authenticateService/roleAuthenticate.service';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loggedin: boolean = false;
  userLogin: UserLogin = new UserLogin('', '');
  currentUser: User;

  constructor(
    private _authenticateService: AuthenticateService,
    private _userInformationService: UserInformationService,
    private alertService: AlertService,
    private _roleAuthenticateService: RoleAuthenticateService,
    private router: Router) {

  }

  onSubmit() {

    this.alertService.info('Gebruiker ophalen');
    this.submitted = true;
    localStorage.clear();

    this._authenticateService.authenticate(this.userLogin).subscribe(result => {

      localStorage.setItem("token", result.token);

      this._roleAuthenticateService.getInfo();

      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {

        if (this._roleAuthenticateService.isNotLoggedIn()) {

          this.alertService.warning('Er ging iets fout!');

        } else if (this._roleAuthenticateService.isUser()) {

          this.alertService.success('Welkom terug ' + currentUser.userName + "!");

          this.router.navigate(['/article']);

        } else if (this._roleAuthenticateService.isJournalist()) {

          this.alertService.success('Welkom terug ' + currentUser.userName + "!");

          this.router.navigate(['/journalist/dashboard']);

        } else if (this._roleAuthenticateService.isAdministrator()) {

          this.alertService.success('Welkom terug ' + currentUser.userName + "!");

          this.router.navigate(['/admin/dashboard']);
        } else if (this.currentUser.token = "") {
          this.alertService.warning('Er ging iets fout!');
        }

        this.submitted = false;

      });

      /*
              
      //debugger;
      this._userInformationService.getUserInfo((currentUser: CurrentUser) => {
        console.log(currentUser);

         if (currentUser.role.name == "User") {

          this.alertService.success('Welkom terug ' + currentUser.userName + "!");

          this.router.navigate(['/home']);

        } else if (currentUser.role.name == "Journalist") {

          this.alertService.success('Welkom terug ' + currentUser.userName + "!");

          this.router.navigate(['/article']);

        } else if (currentUser.role.name == "Admin") {
          this.alertService.success('Welkom terug ' + currentUser.userName + "!");

            this.router.navigate(['/admin/dashboard']);
      
        } else {
          this.alertService.warning('Er ging iets fout!');

        }
               
      */

    });

  }

  ngOnInit(): void {
  }

}
