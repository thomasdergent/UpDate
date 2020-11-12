import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArticleModule { }
