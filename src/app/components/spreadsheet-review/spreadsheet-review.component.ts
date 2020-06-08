import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ConfirmDialogComponent, ConfirmDialogModel } from "../confirm-dialog/confirm-dialog.component";
import { EmailFormComponent } from "../email-form/email-form.component";
import { EmailItemsService } from "../../services/email-items.service";
import { SpreadsheetGeneratorService } from "../../services/spreadsheet-generator.service";

@Component({
  selector: 'app-spreadsheet-contents',
  templateUrl: './spreadsheet-review.component.html',
  styleUrls: ['./spreadsheet-review.component.css']
})
export class SpreadsheetReviewComponent implements OnInit {

  downloadFilename = 'email-spreadsheet.xlsx';
  emailItems = <any>[];

  displayedColumns: string[] = ['name','email','phone', 'subject', 'body', 'action'];
  dataSource;

  constructor(private confirmDialogComponent: ConfirmDialogComponent,
              private emailItemsService: EmailItemsService,
              private spreadsheetGeneratorService: SpreadsheetGeneratorService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.emailItems = this.emailItemsService.getEmailItems();
    this.dataSource = new MatTableDataSource(this.emailItems);
  }

  generateSpreadsheetUrl() {
    this.spreadsheetGeneratorService.generateSpreadsheetFile(this.downloadFilename);
  }

  clearAllEmailItems() {
    this.emailItemsService.setEmailItems([]);
    this.emailItems = this.emailItemsService.getEmailItems();
    this.dataSource = new MatTableDataSource(this.emailItems);
  }

  openEmailItemDialog(emailItem) {
    console.info(emailItem);
    const dialogRef = this.dialog.open(EmailFormComponent, {
      width: '800px',
      data: {
        action: 'Edit',
        emailItem: emailItem
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Result');
      console.info(result);

      if (result && result.event == 'Edit') {
        this.emailItems = this.emailItemsService.getEmailItems();
        this.dataSource = new MatTableDataSource(this.emailItems);
        this.snackBar.open('Email Item Updated!', 'Dismiss', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    });
  }

  openDeleteConfirmDialog(emailItem): void {
    const message = `Are you sure you want to delete this email item?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.emailItemsService.deleteEmailItem(emailItem);
        this.emailItems = this.emailItemsService.getEmailItems();
        this.dataSource = new MatTableDataSource(this.emailItems);
      };
    });
  }
}
