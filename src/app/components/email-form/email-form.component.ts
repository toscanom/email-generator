import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EmailItemsService } from "../../services/email-items.service";
import { EmailTemplatesService } from "../../services/email-templates.service";

import { LocationService } from "../../services/location.service";

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
      this.locations = locations;
    });

    this.emailItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      subject: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      id: new FormControl(''),
      originalBlurb: new FormControl('')
    });

    if(this.action == 'Add') {
      this.emailTemplate = this.local_data.emailTemplate;

      this.emailItemForm.setValue({
        name: '',
        email: '',
        location: '',
        phone: '',
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

  public hasError = (controlName: string, errorName: string) =>{
    return this.emailItemForm.controls[controlName].hasError(errorName);
  }

  setLocationValues(location) {
    this.emailItemForm.patchValue({
      phone: location.value.phone,
      body: this.emailItemForm.value.originalBlurb.replace('[COLLEGE]', location.value.college)
    });
  }

  compareLocations(location1, location2): boolean {
    return location1.name === location2.name;
  }

  doAction() {
    console.log(this.action)
    console.info(this.emailItemForm.value);

    if(this.action == 'Add') {
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
