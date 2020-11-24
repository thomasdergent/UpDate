import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishArticleComponent } from './publish-article/publish-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

// Import BrowserAnimationsModule
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


// Import your library
import { AlertModule } from 'ngx-alerts';


@NgModule({
  declarations: [PublishArticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,

    // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, positionX: 'right', positionY: 'top' }),
  ]
})
export class PublishArticleModule { }
