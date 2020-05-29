import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmailItemsService {

  private emailItems = [];

  constructor() { }

  public setEmailItems(emailItems) {
    this.emailItems = emailItems;
    console.log(this.emailItems.length + ' Number of items.');
  }

  public getEmailItems() {
    console.log(this.emailItems.length + ' Number of items.');
    return(this.emailItems);
  }
}
