import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InjectorInstance } from './app.module';
import { Concept } from './models/concept';
import { Overview } from './models/Overview';

@Injectable({
  providedIn: 'root',
})
export class DataLoader {
  currentConcept: Concept = DataLoader.getDefaultConcept();
  concepts: Concept[] = [DataLoader.getDefaultConcept()];
  overview: Overview = DataLoader.getDefaultOverview();

  static getConcepts(): Observable<Concept[]> {
    const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
    return httpClient.get<Concept[]>('assets/data/concepts.json');
  }

  constructor() {
    DataLoader.getConcepts().subscribe((data: Concept[]) => {
      console.log('concepts', data);
      this.concepts = data;
      let defaultConcept = data[0];
      defaultConcept.active = true;
      this.loadOverview(defaultConcept);
    });
  }

  loadOverview(concept: Concept) {
    this.concepts.forEach(function (item) {
      item.active = false;
    });
    this.currentConcept = concept;
    this.currentConcept.active = true;
    DataLoader.getOverview(concept.file).subscribe((data: Overview) => {
      console.log('overview', data);
      this.overview = data;
    });
  }

  static getDefaultConcept(): Concept {
    return { file:'', name: '', active: false, currentState:'' };
  }

  static getDefaultOverview(): Overview {
    return { title: '', features: [] };
  }

  ngOnInit() {
    DataLoader.getOverview('java8.json');
  }

  static getOverview(fileName: string): Observable<Overview> {
    const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
    return httpClient.get<Overview>('assets/data/overview/' + fileName );
  }
}
