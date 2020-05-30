import { Injectable } from '@angular/core';

import { Workbook } from 'exceljs';
import * as fs from 'node_modules/file-saver';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetGeneratorService {

  titles = ["Name", "Email", "Phone Number", "Subject", "Blurb"];
  data = [
    ["Name 1", "Email1", "Phone Number1", "Subject1", "Blurb1"],
    ["Name 2", "Email2", "Phone Number2", "Subject2", "Blurb2"],
    ["Name 3", "Email3", "Phone Number3", "Subject3", "Blurb3"],
  ];

  constructor() { }

  public generateSpreadsheetFile(fileName): any {
    let workbook = new Workbook();
    let worksheet1 = workbook.addWorksheet('Developers');
    worksheet1.addRow(this.titles);

    this.data.forEach(emailItem => {
      worksheet1.addRow(emailItem);
    });

    let worksheet2 = workbook.addWorksheet('Bidness Necks');
    worksheet2.addRow(this.titles);

    worksheet2.addRows(this.data);

    worksheet2.addRow(["Norith", "neck@neck.com", "1800NecksNEffect", "Subject1", "Blurb1"]);

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName);
    });
  }
}
