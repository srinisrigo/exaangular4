import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    template: `
    <nav>
        <a routerLink="/" routerLinkActive="active">Home</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a routerLink="/patients" routerLinkActive="active">Patients</a>
        <a routerLink="/studies" routerLinkActive="active">Studies</a>
        <a routerLink="/dicoms" routerLinkActive="active">DICOMS</a>
    </nav>
  `
})

export class HeaderComponent {
}