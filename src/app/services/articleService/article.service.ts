import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesByUserID(id: number): Observable<Article[]>{
    return this.http.get<Article[]>("https:localhost:44348/api/Article/user/" + id);
  }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>("https::localhost:44348/api/Article");
  }
}
