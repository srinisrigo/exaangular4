import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DicomStudyService } from './dicom.service';

@Component({
  template: `
  <div *ngIf="study">
    <table>
    <tr><td><h3>"{{ study.full_name }}"</h3></td></tr>
    <tr><td><label>Id: </label>{{ study.study_id }}</td></tr>
    <tr *ngIf="study.study_json"><td>
      <div class="thumb-container" *ngFor="let stack of study.study_json.study.stacks">
        <img width="60" height="80" src="{{getThumbnailUrl(stack)}}" onerror="this.onerror=null;this.src='../images/imageerror.png';" /> 
      </div>
    </td></tr>
    <tr *ngIf="!study.study_json"><td>study XML finding...</td></tr>
    <tr><td><button (click)="gotoStudies()">Back</button></td></tr>
    </table>
  </div>
  <span *ngIf="!study">no record found</span>
  `,
  animations: []
})
export class StudyDetailComponent implements OnInit, OnDestroy  {
  study: any;
  private selectedId: any = 0;
  private patient: any = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DicomStudyService
  ) { }

  ngOnInit() {
    if (this.route.params.value) {
      this.selectedId = +this.route.params.value.id;
      this.patient = +this.route.params.value.patient;
    }

    if (isNaN(this.selectedId)) this.selectedId = 0;
    if (isNaN(this.patient)) this.patient = 0;
    
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getStudy(+params['id']))
      .subscribe((study: any) => this.study = study);          
    setTimeout(() => { if (this.study) this.service.getStudyStacks(this.study.study_id); }, 10);
  }

  ngOnDestroy() {
  }

  gotoStudies() {
    this.router.navigate(['/dicoms', this.patient, this.selectedId]);
  }

  getThumbnailUrl(stack) {
    return (stack.images.length < 1)? '../images/imageerror.png':this.service.getWadov1img() + "?fn=" + stack.images[0]._f + "&t=1";
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/