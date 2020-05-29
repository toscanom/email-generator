import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetGeneratorService {

  constructor(private sanitizer: DomSanitizer) { }

  public generateSpreadsheetFile(): any {
    const data = 'some text';
    const blob = new Blob([data], { type: "text/plain;charset=utf-8" });

    return this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
}
