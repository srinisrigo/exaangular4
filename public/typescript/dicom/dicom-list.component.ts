// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

import { DicomStudyService } from './dicom.service';

@Component({
    template: `
    <table *ngIf="studies && studies.length">
      <tr *ngFor="let study of studies"
        [class.selected]="isSelected(study)">
        <td>
            <img class="scan" title="scan" (click)="onSelect(study)" />
        </td>
        <td>
            {{ study.study_id }}
        </td>
        <td>
            {{ study.no_of_series }}({{ study.no_of_instances }})
        </td>
        <td>
            {{ study.accession_no }}{{ study.study_dt? "("+study.study_dt+")":"" }}
        </td>
        <td>
            {{ study.cpt_codes }}
        </td>
        <td>
            {{ study.study_description }}
        </td>
        <td>
            {{ study.modalities }}{{ study.body_part? "("+study.body_part+")":"" }}
        </td>
      </tr>
    </table>
    <span *ngIf="!studies && !studies.length">no records found</span>
  `
})

export class StudyListComponent implements OnInit, OnDestroy {
    studies: any = [];

    private selectedId: any = 0;
    private patient: any = 0;

    constructor(
        private jsonp: Http,
        private service: DicomStudyService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        if (this.route.params.value) {
            this.selectedId = +this.route.params.value.id;
            this.patient = +this.route.params.value.patient;
        }

        if (isNaN(this.selectedId)) this.selectedId = 0;
        if (isNaN(this.patient)) this.patient = 0;

        if (DicomStudyService.studieslist.length <= 0) {
            this.service.setStudies(this);
            this.studies = this.service.getStudies();
        }
        else this.studies = DicomStudyService.studieslist;
    }

    ngOnDestroy() {
    }

    isSelected(study: any) { return study.study_id == this.selectedId; }

    onSelect(study: any) {
        this.router.navigate(['/dicom', study.study_id, this.patient]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */