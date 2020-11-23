import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reaction } from 'src/app/models/reaction/reaction.model';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http: HttpClient) { }

  addReaction(reaction: Reaction) {
    console.log("reaction", reaction);
    return this.http.post<Reaction>("https://localhost:44348/api/Reaction/", reaction);
  }

  getReactionsByArticleTitle(titleName: string): Observable<Reaction[]>{
    return this.http.get<Reaction[]>("https:localhost:44348/api/Reaction/article/" + titleName);
  }

  deleteReaction(reactionID: number) {
    return this.http.delete<Reaction>("https://localhost:44348/api/Reaction/" + reactionID);
  }

}
