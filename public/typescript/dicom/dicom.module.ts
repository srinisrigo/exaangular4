import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { StudyListComponent }    from './dicom-list.component';
import { StudyDetailComponent }  from './dicom-detail.component';

import { DicomStudyService } from './dicom.service';

import { DicomStudiesRoutingModule } from './dicom-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      DicomStudiesRoutingModule
  ],
  declarations: [
    StudyListComponent,
    StudyDetailComponent
  ],
  providers: [
    DicomStudyService
  ]
})
export class DicomStudiesModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/