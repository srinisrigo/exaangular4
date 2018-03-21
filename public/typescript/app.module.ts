import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {JsonpModule, HttpModule} from '@angular/http'

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { PageNotFoundComponent }   from './not-found.component';

import {HeroesModule} from './home/heroes.module';
import {PatientsModule} from './patient/patient.module';
import {StudiesModule} from './study/study.module';
import {DicomStudiesModule} from './dicom/dicom.module';

import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';

@NgModule({
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    AppRoutingModule,
    HeroesModule,
    PatientsModule,
    StudiesModule,
      DicomStudiesModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/