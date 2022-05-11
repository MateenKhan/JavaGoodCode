import { Component, OnInit } from '@angular/core';
import { DataLoader } from '../data-loader';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  constructor(
    public dataLoader: DataLoader,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {}
  public showSuccess(): void {
    this.toastrService.success('Message Success!', 'Title Success!');
  }
}
