import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comment} from '../../models/comment/comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  addComment(comment: Comment) {
    return this.http.post<Comment>("https://localhost:44348/api/Comment/", comment);
  }

  getComment(id: number) {
    return this.http.get<Comment>("https://localhost:44348/api/Comment/" + id);
  }
}