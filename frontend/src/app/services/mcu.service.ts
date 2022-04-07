import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { McuFilter } from '../models/mcu';
import * as qs from 'qs';

@Injectable({
  providedIn: 'root',
})
export class McuService {
  baseUrl = 'api/v1/mcu';
  constructor(private http: HttpClient) {}

  getData(mcuFilter: McuFilter): Observable<any> {
    const queryParams = qs.stringify(mcuFilter);
    return this.http.get(`${this.baseUrl}?${queryParams}`);
  }
}
