import { Component, OnInit } from '@angular/core';

import { EmailTemplatesService } from "../../../services/email-templates.service";

import {EmailFormComponent} from "../email-form/email-form.component";

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email-template-finder',
  templateUrl: './email-template-search.component.html',
  styleUrls: ['./email-template-search.component.css']
})
export class EmailTemplateSearchComponent implements OnInit {

  displayedColumns: string[] = ['name', 'blurb', 'action'];
  dataSource;

  constructor(private emailTemplatesService: EmailTemplatesService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.emailTemplatesService.getEmailTemplates().subscribe((emailTemplates) => {
      this.dataSource = new MatTableDataSource(emailTemplates);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openBlurbDialog(mode, item) {
    console.log('Blurb Dialog Mode:' + mode);
  }

  openEmailItemDialog(emailTemplate) {
    const dialogRef = this.dialog.open(EmailFormComponent, {
      width: '800px',
      data: {
        action: 'Add',
        emailTemplate: emailTemplate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.event == 'Add') {
        this.snackBar.open('Email Item Added!', 'Dismiss', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    });
  }
}
