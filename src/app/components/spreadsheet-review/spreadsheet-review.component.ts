import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';

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

  constructor(private emailItemsService: EmailItemsService, private spreadsheetGeneratorService: SpreadsheetGeneratorService) { }

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

  openEmailItemDialog(mode, item) {
    console.log('Dialog Mode:' + mode);
  }
}
