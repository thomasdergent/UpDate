import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reaction } from 'src/app/models/reaction/reaction.model';

@Injectable({
  providedIn: 'root'
})
export class ReactionServiceService {

  constructor(private http: HttpClient) { }

  addReaction(reaction: Reaction) {
    return this.http.post<Reaction>("https://localhost:44348/api/Reaction/", reaction);
  }

}