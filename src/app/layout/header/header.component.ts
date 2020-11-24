import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Tag } from 'src/app/models/tag/tag.model';
import { CurrentUser } from 'src/app/models/user/current-user.model';
import { getUserFromLocalStorage, User } from 'src/app/models/user/user.model';
import { RoleAuthenticateService } from 'src/app/services/authenticateService/roleAuthenticate.service';
import { TagService } from 'src/app/services/tagService/tag.service';
import { UserInformationService } from 'src/app/services/userService/user-information.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User=new User("","","","","","")
  tags: Tag[];

  constructor(
    private router: Router,
    public roleAuthenticateService: RoleAuthenticateService,
  private alertService: AlertService,    
  private tagService: TagService,
  ) {
    this.getTags();
  }

  getUser(){
    this.user=getUserFromLocalStorage();
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    localStorage.clear();
    this.alertService.success('U bent uitgelogd');
    this.router.navigate(['/home']);
  }

  getTags(){
    this.tagService.getTags().subscribe(
      result=>{
        this.tags=result;
      }
    );
  }

  ngOnInit(): void {
  }

}



