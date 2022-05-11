import { Component, OnInit } from '@angular/core';
import { DataLoader } from '../data-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  show: boolean = false;

  constructor(
    public dataLoader: DataLoader,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {}
  toggle(): void {
    this.show = !this.show;
  }
}
