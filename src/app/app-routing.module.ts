import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {JobListingSearchComponent} from "./components/job-listing-management/job-listing-search/job-listing-search.component";
import {EmailTemplateSearchComponent} from './components/email-list-generation/email-template-search/email-template-search.component';
import {SpreadsheetReviewComponent} from "./components/email-list-generation/spreadsheet-review/spreadsheet-review.component";

const routes: Routes = [
  {path: '', component: JobListingSearchComponent},
  {path: 'emailTemplateSearch', component: EmailTemplateSearchComponent},
  {path: 'jobListingSearch', component: JobListingSearchComponent},
  {path: 'spreadsheetContents', component: SpreadsheetReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
