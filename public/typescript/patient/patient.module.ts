import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PatientListComponent }    from './patient-list.component';
import { PatientDetailComponent }  from './patient-detail.component';

import { PatientService } from './patient.service';

import { PatientsRoutingModule } from './patient-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PatientsRoutingModule
  ],
  declarations: [
    PatientListComponent,
    PatientDetailComponent
  ],
  providers: [
    PatientService
  ]
})
export class PatientsModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/