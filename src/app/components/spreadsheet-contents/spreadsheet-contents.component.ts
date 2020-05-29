import { Component, OnInit } from '@angular/core';

import { EmailItemsService } from "../../services/email-items.service";
import { SpreadsheetGeneratorService } from "../../services/spreadsheet-generator.service";

@Component({
  selector: 'app-spreadsheet-contents',
  templateUrl: './spreadsheet-contents.component.html',
  styleUrls: ['./spreadsheet-contents.component.css']
})
export class SpreadsheetContentsComponent implements OnInit {

  fileUrl;
  downloadFilename;
  emailItems = <any>[];

  constructor(private emailItemsService: EmailItemsService, private spreadsheetGeneratorService: SpreadsheetGeneratorService) { }

  ngOnInit() {
    this.emailItems = this.emailItemsService.getEmailItems();
  }

  generateSpreadsheetUrl() {
    this.downloadFilename = 'email-spreadsheet.txt';
    this.fileUrl = this.spreadsheetGeneratorService.generateSpreadsheetFile();
  }
}
