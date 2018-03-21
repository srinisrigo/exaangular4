// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PatientService }  from './patient.service';

@Component({
  template: `
    <table>
      <tr *ngFor="let patient of patients | async"
        [class.selected]="isSelected(patient)">
        <td>
        <p class="db-row">
            <span *ngIf="patient.full_name">{{ patient.full_name.length>45? patient.full_name.substr(0, 45):patient.full_name }}{{ patient.account_no? "("+patient.account_no+")":"" }}</span>
            <span>{{ patient.phonogram_name }}{{ patient.ideogram_name? "("+patient.ideogram_name+")":"" }}</span>
            <span>{{ patient.birth_date }}{{ patient.gender? "("+patient.gender+")":"" }}</span>
            <img class="setup" title="setup" (click)="onSelect(patient)" />
            <img class="scan" title="scan" (click)="onScan(patient)" />
        </p>
        </td>
      </tr>
    </table>
  `
})
export class PatientListComponent implements OnInit, OnDestroy {
  patients: any;

  private selectedId: number;

  constructor(
    private service: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.patients = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getPatients();
      });
  }

  ngOnDestroy() {
    this.patients.unsubscribe();
  }

  isSelected(patient: any) { return patient.patient_id === this.selectedId; }

  onSelect(patient: any) {
    this.router.navigate(['/patient', patient.patient_id]);
  }

  onScan(patient: any) {
    this.router.navigate(['/studies', patient.patient_id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/