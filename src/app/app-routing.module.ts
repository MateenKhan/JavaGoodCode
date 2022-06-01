import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {AppJsonEditorComponent} from "./json-editor/app-json-editor.component";

const routes: Routes = [
  {path:"overview/:id",component:OverviewComponent},
  {path:"editor/:file",component:AppJsonEditorComponent},
  { path: '**',   redirectTo: '/overview/0', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
