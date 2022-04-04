import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'api/v1/auth';
  constructor(private http: HttpClient) {}

  register(userData: Register): Observable<any> {
    return this.http.post(this.baseUrl + '/register', userData);
  }
  login(userData: Login): Observable<any> {
    return this.http.post(this.baseUrl + '/login', userData);
  }
}
