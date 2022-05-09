import { Component, Input, OnInit } from '@angular/core';
import { DataLoader } from '../data-loader';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  constructor(public dataLoader: DataLoader) {}
  ngOnInit() {}
}
