import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { Article } from 'src/app/models/article/article.model';
import { Articlestatus } from 'src/app/models/articlestatus/articlestatus.model';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { ArticleStatusService } from 'src/app/services/articleStatusService/article-status.service';

@Component({
  selector: 'app-publish-article',
  templateUrl: './publish-article.component.html',
  styleUrls: ['./publish-article.component.scss']
})
export class PublishArticleComponent implements OnInit {

  article: Article = new Article("", "", "", "", 0, null, 0, null, 0, null);
  articleStatusPublish: Articlestatus = new Articlestatus(0, null);

  constructor(
    private _articleService: ArticleService,
    private _articleStatusService: ArticleStatusService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
  ) {
    this.loadArticle();
  }

  loadArticle() {
    const articleTitle = this.route.snapshot.paramMap.get('title');
    this._articleService.getArticleByTitleToReview(articleTitle).subscribe(
      result => {
        this.article = result;
      }
    )
  }

  addArticlePublished() {


    this._articleStatusService.getArticleStatusByID(3).subscribe(
      result => {
        this.articleStatusPublish = result;

        const article = new Article(this.article.title, this.article.subTitle, this.article.shortSummary, this.article.body,
          this.article.tag.tagID, this.article.tag, this.article.user.userID, this.article.user, 3, this.articleStatusPublish, this.article.articleID)

          

        this._articleService.updateArticle(this.article.articleID, article).subscribe();

          this.alertService.success('Artikel gepubliceert');
          this.router.navigate(['/admin/dashboard/articles']);
      }
    );
  }

  ngOnInit(): void {
  }

}
