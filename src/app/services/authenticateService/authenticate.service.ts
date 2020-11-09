import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from 'src/app/models/user/user.model';
import { UserLogin } from 'src/app/models/user/user-login.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient) { }

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44348/api/User/authenticate", userLogin);
  }
}