import {Injectable} from '@angular/core';

import {Workbook} from 'exceljs';
import * as fs from 'node_modules/file-saver';

import {EmailItemsService} from "./email-items.service";

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetGeneratorService {

  titles = ["Name", "Email", "Phone Number", "Subject", "Blurb"];


  constructor(private emailItemsService: EmailItemsService) {
  }

  public generateSpreadsheetFile(fileName): any {
    const data = [];
    const emailItems = this.emailItemsService.getEmailItems();

    emailItems.forEach((emailItem) => {
      data.push([emailItem.name, emailItem.email, emailItem.phone, emailItem.subject, emailItem.body]);
    });

    let workbook = new Workbook();
    let worksheet1 = workbook.addWorksheet('Developers');
    worksheet1.addRow(this.titles);

    data.forEach(emailItem => {
      worksheet1.addRow(emailItem);
    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob, fileName);
    });
  }
}
