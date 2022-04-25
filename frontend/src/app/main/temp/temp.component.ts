import { Component, OnInit } from '@angular/core';
import { Data } from './data/marvel-data';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
})
export class TempComponent implements OnInit {
  mcuData: typeof Data;
  constructor() {}

  ngOnInit(): void {
    this.mcuData = Data.sort((a, b) =>
      new Date(a.releaseDate) < new Date(b.releaseDate)
        ? -1
        : new Date(a.releaseDate) > new Date(b.releaseDate)
        ? 1
        : 0
    );
  }
}
