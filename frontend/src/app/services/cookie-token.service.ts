import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieTokenService {
  constructor(private cookieService: CookieService) {}

  /**
   * sets token Id
   * @param token
   */
  setToken(token: string, expiresIn: string) {
    const now = new Date();
    // removes h from 100000s
    const expiresInHours = expiresIn.slice(0, -1);
    const expiryDate = new Date(
      now.getTime() + Number(expiresInHours) * 3600000
    );
    this.cookieService.set('token', token, 100000, '/', '');
    this.cookieService.set('expiresIn', String(expiryDate), 100000, '/', '');
  }

  setTokenOnly(token: string) {
    this.cookieService.set('token', token, 100000, '/', '');
  }

  /**
   * gets token Id
   */
  getToken(): string {
    return this.cookieService.get('token');
  }

  /**
   * checks if token exist
   */
  tokenExist(): boolean {
    // token exist
    const tokenExpiry = this.cookieService.get('expiresIn');
    if (new Date() > new Date(tokenExpiry)) {
      // token expired
      this.cookieService.delete('token');
      this.cookieService.delete('expiresIn');
      return false;
    }
    // token exist and still valid
    return true;
  }

  /***
   * delete token
   */
  deleteToken(): void {
    this.cookieService.delete('token', '/');
  }

  /**
   * delete cookie
   * @param id
   */
  delete(id: string) {
    this.cookieService.delete(id, '/');
  }

  /**
   * sets cookie
   * @param cookieId
   * @param value
   */
  setCookie(cookieId: string, value: any) {
    // parsing value into string to ensure the value is'nt number or json object
    this.cookieService.set(cookieId, String(value), 100000, '/', '');
  }
}
