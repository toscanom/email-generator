import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailItemsService } from "../../services/email-items.service";
import { EmailTemplatesService } from "../../services/email-templates.service";

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  public emailItemForm: FormGroup;

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

  locations;

  constructor(private emailItemsService: EmailItemsService,
              private emailTemplatesService: EmailTemplatesService,
              private locationService: LocationService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.locationService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });

    this.emailItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      subject: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });

    this.emailTemplatesService.getEmailTemplates().subscribe((emailTemplates) => {
      this.emailTemplatesService.convertRawText(emailTemplates);
      this.emailTemplate = this.emailTemplatesService.getEmailTemplate(this.route.snapshot.paramMap.get('id'));
      this.emailItemForm.setValue({
        name: '',
        email: '',
        location: '',
        phone: '',
        subject: '',
        body: this.emailTemplate.blurb
      });
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.emailItemForm.controls[controlName].hasError(errorName);
  }

  createEmailItem(newEmailItem) {
    console.log(newEmailItem)
    this.emailItemsService.addEmailItem(newEmailItem);

    this.emailItemForm.setValue({
      name: '',
      email: '',
      location: '',
      phone: '',
      subject: '',
      body: this.emailTemplate.blurb
    });

    Object.keys(this.emailItemForm.controls).forEach(key => {
      this.emailItemForm.get(key).setErrors(null) ;
    });
  }

  setLocationValues(location) {
    console.info(this.emailItemForm);
    console.info(location);

    this.emailItemForm.patchValue({
      phone: location.value.phone,
      body: this.emailTemplate.blurb.replace('COLLEGE_PLACEHOLDER', location.value.college)
    });
  }
}
