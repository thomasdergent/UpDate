import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import {SignUpModule} from '../views/sign-up/sign-up.module';
import {LoginModule} from '../views/login/login.module';
import {AdministratorModule} from '../views/administrator/administrator.module';
import {ArticleModule} from '../views/article/article.module';
import {AddarticleModule} from '../views/addarticle/addarticle.module';




@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    SignUpModule,
    LoginModule,
    AdministratorModule,
    ArticleModule,
    AddarticleModule
  ]
})
export class SharedModule { }