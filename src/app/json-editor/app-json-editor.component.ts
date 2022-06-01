import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import {Overview} from "../models/Overview";
import {DataLoader} from "../data-loader";

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class AppJsonEditorComponent implements OnInit {

  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent | undefined;

  fileName:string='';

  constructor(private route: ActivatedRoute) {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    // DataLoader.loadFile(this.fileName).subscribe((data: Overview) => {
    //   console.log('file Data', data);
    //   this.data = data;
    // });
    this.data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.fileName = String(routeParams.get('file'));
  }

}
