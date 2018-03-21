import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as tsGlobals from '../globals';

@Injectable()
export class StudyService {
    static studieslist = [];
    private studiesPromise = Promise.resolve(StudyService.studieslist);
    constructor(
        private jsonp: Http,
        private route: ActivatedRoute
    ) {        
    }

    getStudies() {
        return this.studiesPromise;
    }

    getStudy(id: number | string) {
        return this.studiesPromise
            .then(studies => studies.find(study => study.study_id == id));
    }

    setStudies(component: any) {
        if (component) {
            this.jsonp.request(component.patient ? (tsGlobals.studiesapi + '?patient=' + component.patient):tsGlobals.studiesapi)
            .subscribe(res => {
                let obj = eval('[' + res._body + ']');
                if (obj && obj[0]) {
                    for (let p=0;p<obj[0].length;p++) {
                        StudyService.studieslist.push(obj[0][p]);
                    }

                    if (component.studies) {
                        component.studies = StudyService.studieslist;
                    }
                }
            });
        }
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */