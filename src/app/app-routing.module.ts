import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailTemplateSearchComponent } from './components/email-template-search/email-template-search.component';
import { SpreadsheetContentsComponent } from "./components/spreadsheet-contents/spreadsheet-contents.component";

const routes: Routes = [
  { path: '', component: EmailTemplateSearchComponent },
  { path: 'search', component: EmailTemplateSearchComponent },
  { path: 'spreadsheetContents', component: SpreadsheetContentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
