import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudyListComponent }    from './study-list.component';
import { StudyDetailComponent }  from './study-detail.component';

const studiesRoutes: Routes = [
  { path: 'studies',  component: StudyListComponent },
  { path: 'studies/:patient/:id',  component: StudyListComponent },
  { path: 'study/:id', component: StudyDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(studiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudiesRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/