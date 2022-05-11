import { Component, OnInit } from '@angular/core';
import { DataLoader } from '../data-loader';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
          '500ms ease-in',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class OverviewComponent implements OnInit {
  show: boolean = false;

  constructor(public dataLoader: DataLoader) {}
  ngOnInit() {}
  toggle(): void {
    this.show = !this.show;
  }
}
