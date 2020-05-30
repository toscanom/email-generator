import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmailTemplateSearchComponent } from './components/email-template-search/email-template-search.component';
import { SpreadsheetReviewComponent } from './components/spreadsheet-review/spreadsheet-review.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { LoginComponent } from './components/login/login.component';
import { BlurbComponent } from './components/blurb/blurb.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailTemplateSearchComponent,
    SpreadsheetReviewComponent,
    EmailFormComponent,
    LoginComponent,
    BlurbComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
