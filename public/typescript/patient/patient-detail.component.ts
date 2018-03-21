import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PatientService }  from './patient.service';

@Component({
  template: `
  <div *ngIf="patient">
    <h3>"{{ patient.full_name }}"</h3>
    <div>
      <label>Id: </label>{{ patient.patient_id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="patient.full_name" placeholder="full_name"/>
    </div>
    <p>
      <button (click)="gotoPatients()">Back</button>
    </p>
  </div>
  `,
  animations: [  ]
})
export class PatientDetailComponent implements OnInit, OnDestroy {
  patient: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PatientService
  ) {}

  ngOnInit() {
    this.patient = this.route.params
      .switchMap((params: Params) => {
        return this.service.getPatient(+params['id']);
      });
  }

  ngOnDestroy() {
    this.patient.unsubscribe();
  }

  gotoPatients() {
    let patientId = this.patient ? this.patient.patient_id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/patients', { id: patientId }]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/