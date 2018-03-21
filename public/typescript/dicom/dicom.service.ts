import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as tsGlobals from '../globals';


@Injectable()
export class DicomStudyService {
    static studieslist = [];
    private studiesPromise = Promise.resolve(DicomStudyService.studieslist);

    constructor(
        private http: Http,
        private jsonp: Jsonp,
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
            this.http.request(tsGlobals.dicomstudiesapi + (component.patient ? ('?p=' + component.patient) : ''))
                .subscribe(res => {
                    let obj = eval('[' + res._body + ']');
                    if (obj && obj[0]) {
                        for (let p = 0; p < obj[0].length; p++) {
                            DicomStudyService.studieslist.push(obj[0][p]);
                        }

                        if (component.studies) {
                            component.studies = DicomStudyService.studieslist;
                        }
                    }
                });
        }
    }

    getStudyStacks(study_id: number | string) {
        let studyIndex = -1;
        for (let p = 0; p < DicomStudyService.studieslist.length; p++) {
            if (DicomStudyService.studieslist[p].study_id == study_id) {
                studyIndex = p;
                break;
            }
        }
        if (!DicomStudyService.studieslist[studyIndex].study_json) {
            let url = tsGlobals.studyviewerobject + (study_id ? ('?s=' + study_id) : '');
            this.http.request(url, { method: 'Get' })
                .subscribe(
                    (res) => {
                        let obj = eval('[' + res._body + ']');
                        if (obj && obj[0]) {
                            DicomStudyService.studieslist[studyIndex].study_json = obj[0];
                        }
                    },
                    (data) => {
                        console.log(data);
                        //&c=JSONP_CALLBACK
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }

    getWadov1img() {
        return tsGlobals.wadov1img;
    }

}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */