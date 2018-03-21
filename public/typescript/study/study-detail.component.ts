import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StudyService }  from './study.service';

@Component({
  template: `
  <div *ngIf="study">
    <h3>"{{ study.full_name }}"</h3>
    <div>
      <label>Id: </label>{{ study.study_id }}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="study.full_name" placeholder="full_name"/>
    </div>
    <p>
      <button (click)="gotoStudies()">Back</button>
    </p>
  </div>
  `,
  animations: [  ]
})
export class StudyDetailComponent implements OnInit, OnDestroy {
  study: any;
  private selectedId: any = 0;
  private patient: any = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudyService
  ) {}

  ngOnInit() {
    if (this.route.params.value) {
      this.selectedId = +this.route.params.value.id;
      this.patient = +this.route.params.value.patient;
    }

    if (isNaN(this.selectedId)) this.selectedId = 0;
    if (isNaN(this.patient)) this.patient = 0;

    this.route.params
      .switchMap((params: Params) => this.service.getStudy(+params['id']))
      .subscribe((study: any) => this.study = study);
  }

  ngOnDestroy() {
  }

  gotoStudies() {
    let studyId = this.study ? this.study.study_id : null;
    this.router.navigate(['/studies', this.patient, studyId]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/