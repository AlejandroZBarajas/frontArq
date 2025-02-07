import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interface/user-interface';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  private apiUrl = 'http://localhost:8080/users/all';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.apiUrl);
  }
}
