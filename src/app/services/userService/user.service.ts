import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { Role } from 'src/app/models/role/role.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>("https:localhost:44348/api/User")
  }

  getUsersByRole(id: number): Observable<User[]>{
    return this.http.get<User[]>("https:localhost:44348/api/User/role/" + id)
  }

  getUserByID(id: number): Observable<User>{
    return this.http.get<User>("https:localhost:44348/api/User/" + id);
  }

  getUserByUserName(userName: string): Observable<User>{
    return this.http.get<User>("https:localhost:44348/api/User/userName/" + userName);
  }

  getUserByEmail(email: string): Observable<User>{
    return this.http.get<User>("https:localhost:44348/api/User/email/" + email);
  }

  addUser(user: User) {
    return this.http.post<User>("https://localhost:44348/api/User/", user);
  }

  updateUser(userID: number, user: User) {
    return this.http.put<User>("https://localhost:44348/api/User/" + userID, user);
  }

  deleteUser(userID: number) {
    return this.http.delete<User>("https://localhost:44348/api/User/" + userID);
  }

  decode() {
    if (localStorage.getItem("token") !=null){
      return decode(localStorage.getItem('token'));
    }
  }
}