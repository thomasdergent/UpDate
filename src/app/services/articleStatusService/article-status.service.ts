import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articlestatus } from 'src/app/models/articlestatus/articlestatus.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleStatusService {

  constructor(private http: HttpClient) { }

getAllArticleStatus(): Observable<Articlestatus[]>{
  return this.http.get<Articlestatus[]>("https:localhost:44348/api/ArticleStatus")
}

getArticleStatusByID(articleStatusID: number): Observable<Articlestatus>{
  return this.http.get<Articlestatus>("https:localhost:44348/api/ArticleStatus/" + articleStatusID)
}

}