import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articlesuser } from 'src/app/models/articlesuser/articlesuser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesuserService {

  constructor(private http: HttpClient) { }

  getArticlesByUsername(userName: string): Observable<Articlesuser[]>{
    return this.http.get<Articlesuser[]>("https:localhost:44348/api/Article/userName/" + userName);
  }
  
}
