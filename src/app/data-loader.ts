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

  loadOverviewByConceptId(id:number) {
    if(!id){
      return;
    }
    let curtCncpt= this.currentConcept;
    let file = "";
    this.concepts.forEach(function (item) {
      item.active = false;
      if(id===item.id){
        curtCncpt = item;
        curtCncpt.active = true;
        file = curtCncpt.file;
      }
    });
    DataLoader.getOverview(file).subscribe((data: Overview) => {
      console.log('overview', data);
      this.overview = data;
    });
  }

  static getDefaultConcept(): Concept {
    return { id: 0, file:'', name: '', active: false, currentState:'' };
  }

  static getDefaultOverview(): Overview {
    return { title: '', features: [] };
  }

  ngOnInit() {
    // DataLoader.getOverview('basics.json');
  }

  static getOverview(fileName: string): Observable<Overview> {
    if(fileName==null || fileName.trim().length==0){
      throw new DOMException("overview cannot be loaded with filename:"+fileName);
    }
    const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
    return httpClient.get<Overview>('assets/data/overview/' + fileName );
  }

  static loadFile(fileName: string): Observable<Overview> {
    if(fileName==null || fileName.trim().length==0){
      throw new DOMException("file cannot be loaded with filename:"+fileName);
    }
    const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
    return httpClient.get<Overview>( fileName );
  }
}
