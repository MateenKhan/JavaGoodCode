import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {JsonEditorComponent} from "./json-editor/json-editor.component";

const routes: Routes = [
  {path:"overview/:id",component:OverviewComponent},
  {path:"editor/:file",component:JsonEditorComponent},
  { path: '',   redirectTo: '/overview/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
