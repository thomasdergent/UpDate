import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role/role.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitted : boolean = false;
  user : User = new User( 0, '', '', '', '', '', null,1);

  constructor(private _userService : UserService, private router : Router) { 
    localStorage.clear();
  }

  onSubmit() {
    this.submitted = true;
    
    this._userService.addUser(this.user).subscribe();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
