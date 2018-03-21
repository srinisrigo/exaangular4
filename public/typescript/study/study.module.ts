import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { StudyListComponent }    from './study-list.component';
import { StudyDetailComponent }  from './study-detail.component';

import { StudyService } from './study.service';

import { StudiesRoutingModule } from './study-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudiesRoutingModule
  ],
  declarations: [
    StudyListComponent,
    StudyDetailComponent
  ],
  providers: [
    StudyService
  ]
})
export class StudiesModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/