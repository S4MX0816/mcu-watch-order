import { Component, OnInit } from '@angular/core';
import { Mcu } from '../models/mcu';
import { McuService } from '../services/mcu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  mcuData!: Mcu[];
  constructor(private readonly mcuService: McuService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mcuService.getData().subscribe((res) => {
      this.mcuData = res.data;
    });
  }
}
