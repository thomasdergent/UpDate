import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateService } from './services/authenticateService/authenticate.service';
import { SignUpComponent } from './views/sign-up/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login/login.component';
import { AddarticleComponent } from './views/addarticle/addarticle/addarticle.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard/admin-dashboard.component'
import { JournalistCRUDComponent } from './views/journalist-crud/journalist-crud/journalist-crud.component'
import { ManageTagsComponent } from './views/manage-tags/manage-tags/manage-tags.component'
import { JournalistDashboardComponent } from './views/journalist-dashboard/journalist-dashboard/journalist-dashboard.component'
import { EditArticleComponent } from './views/edit-article/edit-article/edit-article.component'
import { ManageArticlesComponent } from './views/manage-articles/manage-articles/manage-articles.component'
import { PublishArticleComponent } from './views/publish-article/publish-article/publish-article.component'
import {ArticleDetailsComponent} from './views/article-details/article-details/article-details.component'
import {TagComponent} from './views/tag/tag/tag.component'

import { AdminGuard } from './guards/admin/admin.guard'
import { JournalistGuard } from './guards/journalist/journalist.guard'
import { UserGuard } from './guards/user/user.guard'
import { HomeComponent } from './views/home/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/categorie/:tagName', component: TagComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article/:title', component: ArticleDetailsComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'admin/dashboard/journalists', component: JournalistCRUDComponent, canActivate: [AdminGuard] },
  { path: 'admin/dashboard/tags', component: ManageTagsComponent, canActivate: [AdminGuard] },
  { path: 'admin/dashboard/articles', component: ManageArticlesComponent, canActivate: [AdminGuard] },
  { path: 'admin/article/publish/:title', component: PublishArticleComponent, canActivate: [AdminGuard] },
  { path: 'journalist/dashboard', component: JournalistDashboardComponent, canActivate: [JournalistGuard] },
  { path: 'journalist/article/addArticle', component: AddarticleComponent, canActivate: [JournalistGuard] },
  { path: 'journalist/article/edit/:title', component: EditArticleComponent, canActivate: [JournalistGuard] },
  //errors
  { path: '', redirectTo: "home", pathMatch:'full'},
  //wrong url
  { path: "**",redirectTo:"home"},

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