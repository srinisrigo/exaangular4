// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';

import { StudyService } from './study.service';

@Component({
    template: `
    <table *ngIf="studies && studies.length">
      <tr *ngFor="let study of studies"
        [class.selected]="isSelected(study)">
        <td>
        <p class="db-row">
            <img class="edit" title="edit" (click)="onSelect(study)" />
            <img class="notes" title="notes" />
            <img class="report" title="report" />
            <img class="scan" title="scan" (click)="onDicomSelect(study)" />
            <img class="setup" title="setup" />
            <img class="view" title="view" />
            <span>{{ study.accession_no }}{{ study.study_dt? "("+study.study_dt+")":"" }}</span>
            <span>{{ study.full_name }}</span>
            <span>{{ study.cpt_codes }}</span>
            <span>{{ study.study_description }}</span>
            <span>{{ study.modalities }}{{ study.body_part? "("+study.body_part+")":"" }}</span>
        </p>
        </td>
      </tr>
    </table>
  `
})
export class StudyListComponent implements OnInit, OnDestroy {
    studies: any = [];

    private selectedId: any = 0;
    private patient: any = 0;

    constructor(
        private jsonp: Http,
        private service: StudyService,
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
        
        if (StudyService.studieslist.length <= 0) {
            this.service.setStudies(this);
            this.studies = this.service.getStudies();
        }
        else this.studies = StudyService.studieslist;
    }

    ngOnDestroy() {
    }

    isSelected(study: any) { return study.study_id == this.selectedId; }

    onSelect(study: any) {
        this.router.navigate(['/study', study.study_id]);
    }

    onDicomSelect(study: any) {
        this.router.navigate(['/dicom', study.study_id]);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */