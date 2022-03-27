import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(`api/v1/auth`);
  }
}
