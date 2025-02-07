import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteUsersService {
  private apiUrl = 'http://localhost:8080/users/delete';
  constructor(private http: HttpClient) {}

  deleteUser(userId: number): Observable<void> {
    return this.http.request<void>('DELETE', this.apiUrl, {
      body: { id: userId }
    });
  }
}
