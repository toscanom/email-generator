import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmailItemsService {

  private key = 'EmailItems';

  constructor() { }

  public setEmailItems(emailItems) {
    sessionStorage.setItem(this.key, JSON.stringify(emailItems));
    console.log(emailItems.length + ' Number of items.');
  }

  public getEmailItems() {
    let emailItems = JSON.parse(sessionStorage.getItem(this.key));
    if(emailItems === null) {
      emailItems = [];
    }

    console.log(emailItems.length + ' Number of items.');
    return(emailItems);
  }
}
