import { Component, OnInit } from '@angular/core';

import { EmailTemplatesService } from "../../services/email-templates.service";

@Component({
  selector: 'app-email-template-finder',
  templateUrl: './email-template-finder.component.html',
  styleUrls: ['./email-template-finder.component.css']
})
export class EmailTemplateFinderComponent implements OnInit {

  templates = [];

  constructor( private emailTemplatesService: EmailTemplatesService) { }

  ngOnInit() {
    this.emailTemplatesService.getEmailTemplates().subscribe((templateFullText) => {
      const blurbsWTitles = templateFullText.trim().split('***');

      blurbsWTitles.forEach((blurb) => {
        let temp = blurb.replace(/[\n\r]/g, ' ');
        const templateFields = temp.split('### ');

        if(templateFields && templateFields[0] && templateFields[1]) {
          this.templates.push({
            title: templateFields[0].trim(),
            body: templateFields[1].trim()
          })
        } else {
          console.log('ERROR');
          console.info(templateFields)
        }
      })

      console.info(this.templates);
    })
  }
}
