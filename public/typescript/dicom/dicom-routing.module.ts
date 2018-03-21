import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudyListComponent }    from './dicom-list.component';
import { StudyDetailComponent }  from './dicom-detail.component';

const dicomsRoutes: Routes = [
  { path: 'dicoms',  component: StudyListComponent },
  { path: 'dicoms/:patient/:id',  component: StudyListComponent },
  { path: 'dicom/:id/:patient', component: StudyDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(dicomsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DicomStudiesRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/