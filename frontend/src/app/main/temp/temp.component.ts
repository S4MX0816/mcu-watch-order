import { Component, OnInit } from '@angular/core';
import { Data } from './data/marvel-data';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
})
export class TempComponent implements OnInit {
  mcuData = Data;
  constructor() {}

  ngOnInit(): void {}
}
