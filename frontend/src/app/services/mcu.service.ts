import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class McuService {
  baseUrl = 'api/v1/mcu';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
