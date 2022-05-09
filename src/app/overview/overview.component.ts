import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataLoader } from '../data-loader';
import { Concept } from '../models/concept';
import { Overview } from '../models/Overview';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  @Input() concept: Concept = AppComponent.getDefaultConcept();
  overview: Overview = { title: '', features: [] };
  constructor() {}

  ngOnInit() {
    DataLoader.getOverview(this.concept.name).subscribe(
      (data: Overview) => (this.overview = data)
    );
  }
}
