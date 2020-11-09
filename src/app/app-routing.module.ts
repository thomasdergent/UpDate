import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateService } from './services/authenticateService/authenticate.service';
import { RoleAuthenticateService } from './services/authenticateService/roleAuthenticate.service';
import { SignUpComponent } from './views/sign-up/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login/login.component';
import { ArticleComponent } from './views/article/article/article.component';
import { AdministratorComponent } from './views/administrator/administrator/administrator.component';
import { AddarticleComponent } from './views/addarticle/addarticle/addarticle.component';

import {AdminGuard} from './guards/admin/admin.guard'
import {JournalistGuard} from './guards/journalist/journalist.guard'
import {UserGuard} from './guards/user/user.guard'


const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'administrator', component: AdministratorComponent, canActivate: [AdminGuard]},
  { path: 'addArticle', component: AddarticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [
    AdminGuard, JournalistGuard, UserGuard,
    AuthenticateService
  ]
})
export class AppRoutingModule { }
