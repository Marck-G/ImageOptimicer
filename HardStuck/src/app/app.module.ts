import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';

import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import {NgxImageCompressService, } from 'ngx-image-compress';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BodyComponent,
    NgDropFilesDirective


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
