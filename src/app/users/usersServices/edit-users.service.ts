import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditUsersService {
  private apiUrl = 'http://localhost:8080/users/update'; // Ruta de tu API en Go

  constructor(private http: HttpClient) {}

  updateUser(userData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, userData);
  }
}
