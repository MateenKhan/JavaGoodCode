import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { HttpClientModule } from '@angular/common/http';

import { Injector } from '@angular/core';
import { DataLoader } from './data-loader';
import { ClipboardModule } from 'ngx-clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppJsonEditorComponent } from './json-editor/app-json-editor.component';
import { NgJsonEditorModule } from 'ang-jsoneditor'

export let InjectorInstance: Injector;
@NgModule({
  declarations: [AppComponent, OverviewComponent, AppJsonEditorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ClipboardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    NgJsonEditorModule,
  ],
  providers: [DataLoader],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
