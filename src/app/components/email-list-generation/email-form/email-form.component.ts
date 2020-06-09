import {Component, OnInit, Inject, Optional} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {EmailItemsService} from "../../../services/email-items.service";
import {EmailTemplatesService} from "../../../services/email-templates.service";

import {LocationService} from "../../../services/location.service";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  public emailItemForm: FormGroup;
  action: string;
  local_data: any;

  title;
  submitLabel;

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
    company: '',
    years: '',
    industry: '',
    subject: '',
    body: '',
    originalBlurb: ''
  };

  locations;

  constructor(private emailItemsService: EmailItemsService,
              private emailTemplatesService: EmailTemplatesService,
              private locationService: LocationService,
              private route: ActivatedRoute,
              public dialogRef: MatDialogRef<EmailFormComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  ngOnInit() {

    this.locationService.getLocations().subscribe((locations) => {
      locations.sort(function (a, b) {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      this.locations = locations;
    });

    this.emailItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      company: new FormControl('', [Validators.required]),
      years: new FormControl('', [Validators.required]),
      industry: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      id: new FormControl(''),
      originalBlurb: new FormControl('')
    });

    if (this.action == 'Add') {
      this.emailTemplate = this.local_data.emailTemplate;

      this.emailItemForm.setValue({
        name: '',
        email: '',
        location: '',
        phone: '',
        company: '',
        years: '',
        industry: '',
        subject: '',
        body: this.emailTemplate.blurb,
        id: '',
        originalBlurb: this.emailTemplate.blurb
      });
      this.title = this.action + ' a ' + this.emailTemplate.name + ' Email Item';
      this.submitLabel = 'Create ';
    } else {
      this.emailItemForm.setValue(this.local_data.emailItem);
      this.title = this.action + ' Email Item';
      this.submitLabel = 'Update ';
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.emailItemForm.controls[controlName].hasError(errorName);
  }

  buildBody() {
    console.log('Location: ' + this.emailItemForm.value.location);
    console.log('Years: ' + this.emailItemForm.value.years);
    console.log('Company: ' + this.emailItemForm.value.company);
    console.log('Industry: ' + this.emailItemForm.value.industry);
    console.log('Subject: ' + this.emailItemForm.value.subject);
    let newBody = this.emailItemForm.value.originalBlurb;

    if (this.emailItemForm.value.location) {
      newBody = newBody.replace('[COLLEGE]', this.emailItemForm.value.location.college)
    }

    if (this.emailItemForm.value.years && this.emailItemForm.value.years.trim() != '') {
      newBody = newBody.replace('[YEARS]', this.emailItemForm.value.years)
    }

    if (this.emailItemForm.value.company && this.emailItemForm.value.company.trim() != '') {
      newBody = newBody.replace('[COMPANY]', this.emailItemForm.value.company)
    }

    if (this.emailItemForm.value.industry && this.emailItemForm.value.industry.trim() != '') {
      newBody = newBody.replace('[INDUSTRY]', this.emailItemForm.value.industry)
    }

    if (this.emailItemForm.value.subject && this.emailItemForm.value.subject.trim() != '') {
      var pattern = /^([aeiou])/i;
      let subjectWithArticle;

      if (pattern.test(this.emailItemForm.value.subject)) {
        subjectWithArticle = "an " + this.emailItemForm.value.subject
      } else {
        subjectWithArticle = "a " + this.emailItemForm.value.subject
      }
      newBody = newBody.replace('[SUBJECT]', subjectWithArticle)
    }

    this.emailItemForm.patchValue({
      phone: this.emailItemForm.value.location.phone,
      body: newBody
    });
  }

  compareLocations(location1, location2): boolean {
    return location1.name === location2.name;
  }

  doAction() {
    console.log(this.action)
    console.info(this.emailItemForm.value);

    if (this.action == 'Add') {
      this.emailItemsService.createEmailItem(this.emailItemForm.value);
    } else {
      this.emailItemsService.updateEmailItem(this.emailItemForm.value);
    }

    this.dialogRef.close({event: this.action, data: this.emailItemForm.value});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel', data: {}});
  }
}
