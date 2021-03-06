import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitted: boolean = false;
  user: User = new User("", "", "", "", "", "", 1)

  constructor(
    private _userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) {
    localStorage.clear();
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.info('Gebruiker toevoegen');

    this._userService.addUser(this.user).subscribe();
    this.alertService.success('Bedankt voor u registratie ' + this.user.userName + "!");

    this.router.navigate(['login']);
  }

  ngOnInit(): void {
  }

}
