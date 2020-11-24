import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticleByID(id: number): Observable<Article>{
    return this.http.get<Article>("https:localhost:44348/api/Article/" + id);
  }

  getArticleByTitle(titleName: string): Observable<Article>{
    return this.http.get<Article>("https:localhost:44348/api/Article/title/" + titleName);
  }

  getArticleByTitleToReview(titleName: string): Observable<Article>{
    return this.http.get<Article>("https:localhost:44348/api/Article/review/title/" + titleName);
  }

  getArticleByTitlePublished(titleName: string): Observable<Article>{
    return this.http.get<Article>("https:localhost:44348/api/Article/published/title/" + titleName);
  }

  getArticlesByUserID(id: number): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article/User/" + id);
  }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article");
  }

  getArticlesToReview(): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article/review/articles");
  }

  getArticlesPublishedByLikes(): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article/published/likes/articles");
  }

  getArticlesPublished(): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article/published/articles");
  }

  getArticlesPublishedByTag(tagName: string): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article/published/articles/" + tagName);
  }

  addArticle(article: Article) {
    return this.http.post<Article>("https://localhost:44348/api/Article/", article);
  }

  updateArticle(articleID: number, article: Article) {
    return this.http.put<Article>("https://localhost:44348/api/Article/" + articleID, article);
  }

  deleteArticle(id: number) {
    return this.http.delete<Article>("https://localhost:44348/api/Article/" + id);
  }



}
