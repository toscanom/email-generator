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
    this.emailTemplatesService.getEmailTemplates().subscribe((rawText) => {
      const rawTemplates = rawText.trim().split('***');

      rawTemplates.forEach((entry) => {
        let cleanTemplate = entry.replace(/[\n\r]/g, ' ');
        const templateFields = cleanTemplate.split('### ');

        if(templateFields && templateFields[0] && templateFields[1]) {
          this.templates.push({
            name: templateFields[0].trim(),
            blurb: templateFields[1].trim()
          })
        } else {
          console.log('ERROR parsing template:');
          console.info(templateFields)
        }
      })

      console.info(this.templates);

      this.emailItemsService.setEmailItems(this.templates);
    })
  }
}
