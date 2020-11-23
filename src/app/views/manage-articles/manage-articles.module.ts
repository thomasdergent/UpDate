import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
 
// Import BrowserAnimationsModule
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ManageArticlesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
  ]
})
export class ManageArticlesModule { }
