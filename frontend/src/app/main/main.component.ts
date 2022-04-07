import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Mcu, McuFilter } from '../models/mcu';
import { McuService } from '../services/mcu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  mcuData: Mcu[] = [];
  mcuFilter: McuFilter = {
    page: 1,
    limit: 40,
  };
  isEndReached = false;
  @ViewChild('mcuContainer') mcuContainer: ElementRef;
  constructor(private readonly mcuService: McuService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.mcuService.getData(this.mcuFilter).subscribe((res) => {
      this.mcuData.push(...res.data);
      this.isEndReached = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkForBottom() {
    const { bottom } = this.mcuContainer.nativeElement.getBoundingClientRect();

    if (this.isEndReached) return;

    if (bottom < window.innerHeight + 50) {
      this.isEndReached = true;
      this.mcuFilter.page += 1;
      this.getData();
    }
  }
}
