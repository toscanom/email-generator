import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatDialogModule,
  MatSortModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatListModule, MatSelectModule, MatOptionModule, MatSnackBarModule, MatDialogRef } from "@angular/material";

import { EmailTemplateSearchComponent } from './components/email-list-generation/email-template-search/email-template-search.component';
import { SpreadsheetReviewComponent } from './components/email-list-generation/spreadsheet-review/spreadsheet-review.component';
import { EmailFormComponent } from './components/email-list-generation/email-form/email-form.component';
import { LoginComponent } from './components/login/login.component';
import { BlurbComponent } from './components/email-list-generation/blurb/blurb.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { JobListingSearchComponent } from './components/job-listing-management/job-listing-search/job-listing-search.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailTemplateSearchComponent,
    SpreadsheetReviewComponent,
    EmailFormComponent,
    LoginComponent,
    BlurbComponent,
    HeaderComponent,
    ConfirmDialogComponent,
    JobListingSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: ConfirmDialogComponent,
      useValue: {}
    },
  ],
  entryComponents: [ConfirmDialogComponent,EmailFormComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
