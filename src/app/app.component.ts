import {Component, OnInit} from '@angular/core';
import {DataLoader} from './data-loader';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Example} from "./models/Feature";
import {Concept} from "./models/concept";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('changeState', [state('small', style({
    transform: 'scale(1.0)'
  })), state('big', style({
    transform: 'scale(0.9)'
  })), transition('small=>big', animate('100ms')), transition('big=>small', animate('100ms'))])],
})
export class AppComponent implements OnInit {
  constructor(public dataLoader: DataLoader) {
  }

  ngOnInit() {
  }

  changeState(concept: Concept) {
    concept.currentState = "big";
  }

  endState(concept: Concept) {
    concept.currentState = "small";
  }
}
