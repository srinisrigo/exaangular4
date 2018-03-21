import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'footer-component',
    template: `
    © {{year}} EMD041003
  `
})

export class FooterComponent {
  private year: number = (new Date()).getFullYear();
}