import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientListComponent }    from './patient-list.component';
import { PatientDetailComponent }  from './patient-detail.component';

const patientsRoutes: Routes = [
  { path: 'patients',  component: PatientListComponent },
  { path: 'patient/:id', component: PatientDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(patientsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatientsRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/