import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './not-found.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';


@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent,
      AboutComponent, ContactComponent, PageNotFoundComponent],
  providers: [CanDeactivateGuard]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
