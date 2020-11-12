import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>("https://localhost:44348/api/Tag");
  }

  getTagByID(tagID: number): Observable<Tag>{
    return this.http.get<Tag>("https:localhost:44348/api/Tag/" + tagID);
  }

  addTag(tag: Tag) {
    return this.http.post<Tag>("https://localhost:44348/api/Tag/", tag);
  }

  updateTag(tagID: number, tag: Tag){
    return this.http.put<Tag>("https:localhost:44348/api/Tag/" + tagID, tag);
  }

  deleteTag(tagID: number){
    return this.http.delete<Tag>("https:localhost:44348/api/Tag/" + tagID)
  }
}