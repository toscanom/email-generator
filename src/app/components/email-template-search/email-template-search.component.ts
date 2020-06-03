import { Component, OnInit } from '@angular/core';

import { EmailItemsService } from "../../services/email-items.service";
import { EmailTemplatesService } from "../../services/email-templates.service";

import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-email-template-finder',
  templateUrl: './email-template-search.component.html',
  styleUrls: ['./email-template-search.component.css']
})
export class EmailTemplateSearchComponent implements OnInit {

  displayedColumns: string[] = ['id','name','blurb'];
  dataSource;
  templates = <any>[];

  constructor( private emailItemsService: EmailItemsService, private emailTemplatesService: EmailTemplatesService) { }

  ngOnInit() {
    this.emailTemplatesService.getEmailTemplates().subscribe((emailTemplates) => {
      this.templates = this.emailTemplatesService.convertRawText(emailTemplates);

      this.dataSource = new MatTableDataSource(this.templates);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
