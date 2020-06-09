import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailTemplatesService {

  constructor(private httpClient: HttpClient) {
  }

  getEmailTemplates(): Observable<any> {
    return this.httpClient.get('assets/files/blurbs.json');
  }
}
