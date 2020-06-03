import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailItemsService } from "../../services/email-items.service";
import { EmailTemplatesService } from "../../services/email-templates.service";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailTemplate = {
    id: '',
    name: '',
    blurb: ''
  };

  emailItem = {
    id: '',
    name: '',
    email: '',
    phone: '',
    subject: '',
    body: ''
  };

  constructor(private emailItemsService: EmailItemsService,
              private emailTemplatesService: EmailTemplatesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.emailTemplatesService.getEmailTemplates().subscribe((emailTemplates) => {
      this.emailTemplatesService.convertRawText(emailTemplates);
      this.emailTemplate = this.emailTemplatesService.getEmailTemplate(this.route.snapshot.paramMap.get('id'));
    });
  }

  addEmailItem() {
    this.emailItemsService.addEmailItem(this.emailItem);
  }
}
