import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
  template: `
    <div class='header-div'>
        <header-component></header-component>
    </div>
    <div class='content-div'>
        <router-outlet></router-outlet>
    </div>
    <div class='footer-div'>
        <footer-component></footer-component>
    </div>
  `
})
export class AppComponent {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */