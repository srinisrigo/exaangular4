import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as tsGlobals from '../globals';

let PATIENTS = [];

let patientsPromise = Promise.resolve(PATIENTS);

@Injectable()
export class PatientService {
  constructor(private jsonp: Http) {
    this.jsonp.request(tsGlobals.patientsapi)
        .subscribe(res => {
          let obj = eval('[' + res._body + ']');
          if (obj && obj[0]) {
            for (let p=0;p<obj[0].length;p++) {
              PATIENTS.push(obj[0][p]);
            }
          }
        });
  }

  getPatients() { return patientsPromise; }

  getPatient(id: number | string) {
    return patientsPromise.then(patients => patients.find(patient => patient.patient_id == id));
  }  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/