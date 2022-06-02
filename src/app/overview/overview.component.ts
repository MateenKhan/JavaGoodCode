import {Component, OnInit} from '@angular/core';
import { DataLoader } from '../data-loader';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Example} from "../models/Feature";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('changeState', [
      state('small', style({
        transform: 'scale(1.0)'
      })),
      state('big', style({
        transform: 'scale(1.5)'
      })),
      transition('small=>big', animate('150ms')),
      transition('big=>small', animate('150ms'))
    ])
  ],
})
export class OverviewComponent implements OnInit {
  show: boolean = false;

  constructor(
    public dataLoader: DataLoader,
    private toastService: ToastrService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      let file = params['file'];
      if(id) {
        this.dataLoader.loadOverviewByConceptId(id);
      } else if(file){
        alert(file);
      }
    });
  }
  toggle(): void {
    this.show = !this.show;
  }
  public showSuccess(example:Example): void {
    this.toastService.success('Copied!');
    example.currentState = "big";
  }

  endState(example:Example) {
    example.currentState = "small";
  }

  navigateToDetail(file:string){
    alert(file);
  }
}
