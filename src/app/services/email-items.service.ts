import {Injectable} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class EmailItemsService {

  private key = 'EmailItems';

  constructor() {
  }

  public createEmailItem(emailItem) {
    let currentEmailItems = this.getEmailItems();

    emailItem.id = uuidv4();
    currentEmailItems.push(emailItem);

    this.setEmailItems(currentEmailItems)
  }

  public getEmailItem(id) {
    return (this.getEmailItems().find(emailItem => emailItem.id == id));
  }

  public updateEmailItem(updatedItem) {
    let emailItems = this.getEmailItems();

    const itemIndex = emailItems.findIndex((emailItem => emailItem.id == updatedItem.id));

    emailItems[itemIndex] = updatedItem;

    this.setEmailItems(emailItems);
  }

  deleteEmailItem(emailItemToDelete: any) {
    let emailItems = this.getEmailItems();

    const itemIndex = emailItems.findIndex((emailItem => emailItem.id == emailItemToDelete.id));
    emailItems.splice(itemIndex, 1);
    this.setEmailItems(emailItems);
  }

  public setEmailItems(emailItems) {
    sessionStorage.setItem(this.key, JSON.stringify(emailItems));
    console.log(emailItems.length + ' Number of items.');
  }

  public getEmailItems() {
    let emailItems = JSON.parse(sessionStorage.getItem(this.key)) || [];
    return (emailItems);
  }
}
