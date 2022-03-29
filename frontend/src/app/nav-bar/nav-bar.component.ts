import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isPlaying = true;
  constructor() {}

  ngOnInit(): void {}
  handleAudio(audioEle: any): void {
    console.log(audioEle);
    this.isPlaying ? audioEle.pause() : audioEle.play();
    this.isPlaying = !this.isPlaying;
  }
}
