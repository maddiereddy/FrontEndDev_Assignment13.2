import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
      <h1>Angular Router</h1>
          <nav class="navbar navbar-default">
            <ul class="nav navbar-nav">
                <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
                <li><a routerLink="/roles" routerLinkActive="active">Roles</a></li>
                <li><a routerLink="/about" routerLinkActive="active">About</a></li>
                <li><a routerLink="/contact" routerLinkActive="active">Contact Us</a></li>
            </ul>
          </nav>
      <router-outlet></router-outlet>`,

    styleUrls: ['../app.component.css']
})
export class HeaderComponent { }

