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

  getArticlesByUserID(id: number): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article/User/" + id);
  }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>("https::localhost:44348/api/Article");
  }

  addArticle(article: Article) {
    return this.http.post<Article>("https://localhost:44348/api/Article/", article);
  }

  updateArticle(articleID: number, article: Article) {
    return this.http.put<Article>("https://localhost:44348/api/Article/" + articleID, article);
  }

  deleteUser(articleID: number) {
    return this.http.delete<Article>("https://localhost:44348/api/Article/" + articleID);
  }


}
