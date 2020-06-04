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

  fileUrl;
  downloadFilename = 'email-spreadsheet.txt';
  emailItems = <any>[];

  displayedColumns: string[] = ['name','email','phone', 'subject', 'body'];
  dataSource;

  constructor(private emailItemsService: EmailItemsService, private spreadsheetGeneratorService: SpreadsheetGeneratorService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.emailItemsService.getEmailItems());
  }

  generateSpreadsheetUrl() {
    this.spreadsheetGeneratorService.generateSpreadsheetFile(this.downloadFilename);
  }

  clearAllEmailItems() {
    this.emailItemsService.setEmailItems([]);
    this.dataSource = new MatTableDataSource(this.emailItemsService.getEmailItems());
  }
}
