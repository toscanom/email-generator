import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailTemplateSearchComponent } from './components/email-template-search/email-template-search.component';
import { SpreadsheetReviewComponent } from "./components/spreadsheet-review/spreadsheet-review.component";

const routes: Routes = [
  { path: '', component: EmailTemplateSearchComponent },
  { path: 'search', component: EmailTemplateSearchComponent },
  { path: 'spreadsheetContents', component: SpreadsheetReviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
