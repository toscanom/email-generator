import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatListModule, MatSelectModule, MatOptionModule } from "@angular/material";

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
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
