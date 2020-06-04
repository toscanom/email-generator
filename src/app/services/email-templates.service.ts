import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailTemplatesService {

  emailTemplates;

  constructor(private httpClient: HttpClient) { }

  getEmailTemplates() : Observable<any> {
    return this.httpClient.get('assets/files/blurbs.txt', {responseType: 'text'});
  }

  public getEmailTemplate(id) : any {
    return(this.emailTemplates.find(template => template.id == id));
  }

  //TEMP
  public convertRawText(rawText): any {
    const rawTemplates = rawText.trim().split('***');
    const emailTemplates = [];
    let id = 0;

    rawTemplates.forEach((entry) => {
      let cleanTemplate = entry.replace(/[\n\r]/g, ' ');
      const templateFields = cleanTemplate.split('### ');

      if (templateFields && templateFields[0] && templateFields[1]) {
        emailTemplates.push({
          id: id++,
          name: templateFields[0].trim(),
          blurb: templateFields[1].trim()
        })
      } else {
        console.log('ERROR parsing template:');
        console.info(templateFields)
      }
    })
    this.emailTemplates = emailTemplates;
    return emailTemplates;
  }
}
