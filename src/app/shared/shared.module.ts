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
import {AdminDashboardModule} from '../views/admin-dashboard/admin-dashboard.module'
import {JournalistCRUDModule} from '../views/journalist-crud/journalist-crud.module'
import {ManageTagsModule} from '../views/manage-tags/manage-tags.module'
import {JournalistDashboardModule} from '../views/journalist-dashboard/journalist-dashboard.module'
import {EditArticleModule} from '../views/edit-article/edit-article.module'

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


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
    AddarticleModule,
    AdminDashboardModule,
    JournalistCRUDModule,
    JournalistDashboardModule,
    ManageTagsModule,
    EditArticleModule,
    BrowserAnimationsModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
 
    // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top'})
  ]
})
export class SharedModule { }
