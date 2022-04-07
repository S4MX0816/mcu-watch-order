import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieTokenService } from '../services/cookie-token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isPlaying = true;
  constructor(
    private readonly cookieTokenServie: CookieTokenService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  handleAudio(audioEle: any): void {
    console.log(audioEle);
    this.isPlaying ? audioEle.pause() : audioEle.play();
    this.isPlaying = !this.isPlaying;
  }

  logout() {
    this.cookieTokenServie.deleteToken();
    this.router.navigate(['']);
  }
}
