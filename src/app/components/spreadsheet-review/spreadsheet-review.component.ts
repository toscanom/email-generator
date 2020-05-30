import { Component, OnInit } from '@angular/core';

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

  constructor(private emailItemsService: EmailItemsService, private spreadsheetGeneratorService: SpreadsheetGeneratorService) { }

  ngOnInit() {
    this.emailItems = this.emailItemsService.getEmailItems();
  }

  generateSpreadsheetUrl() {
    this.spreadsheetGeneratorService.generateSpreadsheetFile(this.downloadFilename);
  }
}
