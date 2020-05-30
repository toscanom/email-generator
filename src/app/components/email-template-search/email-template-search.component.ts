import { Component, OnInit } from '@angular/core';

import { EmailItemsService } from "../../services/email-items.service";
import { EmailTemplatesService } from "../../services/email-templates.service";

@Component({
  selector: 'app-email-template-finder',
  templateUrl: './email-template-search.component.html',
  styleUrls: ['./email-template-search.component.css']
})
export class EmailTemplateSearchComponent implements OnInit {

  templates = <any>[];

  constructor( private emailItemsService: EmailItemsService, private emailTemplatesService: EmailTemplatesService) { }

  ngOnInit() {
    this.emailTemplatesService.getEmailTemplates().subscribe((emailTemplates) => {
      console.info(emailTemplates);
      this.templates = this.emailTemplatesService.convertRawText(emailTemplates);
      this.emailItemsService.setEmailItems(this.templates);
    })
  }
}
