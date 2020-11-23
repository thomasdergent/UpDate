import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from 'src/app/models/like/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }

  getLikeByID(id: number): Observable<Like>{
    return this.http.get<Like>("https:localhost:44348/api/Like/" + id);
  }

  getLikes(): Observable<Like[]> {
    return this.http.get<Like[]>("https:localhost:44348/api/Like")
  }

  getLikesByArticleTitle(articleTitle: string): Observable<Like[]> {
    return this.http.get<Like[]>("https:localhost:44348/api/Like/likes/articles/" + articleTitle);
  }

  addLike(like: Like) {
    return this.http.post<Like>("https://localhost:44348/api/Like/", like);
  }

  deleteLikeByUser(userID: number) {
    return this.http.delete<Like>("https://localhost:44348/api/Like/user/" + userID);
  }
}