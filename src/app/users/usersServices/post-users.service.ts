import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interface/user-interface';

@Injectable({
  providedIn: 'root'
})
export class PostUsersService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  createUser(user: UserInterface): Observable<UserInterface> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<UserInterface>(this.apiUrl, user, {headers});
  }
}
