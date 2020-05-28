import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailTemplateFinderComponent } from './components/email-template-finder/email-template-finder.component';

const routes: Routes = [
  { path: '', component: EmailTemplateFinderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
