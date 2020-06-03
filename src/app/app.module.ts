import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatListModule } from "@angular/material";

import { EmailTemplateSearchComponent } from './components/email-template-search/email-template-search.component';
import { SpreadsheetReviewComponent } from './components/spreadsheet-review/spreadsheet-review.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { LoginComponent } from './components/login/login.component';
import { BlurbComponent } from './components/blurb/blurb.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmailTemplateSearchComponent,
    SpreadsheetReviewComponent,
    EmailFormComponent,
    LoginComponent,
    BlurbComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
