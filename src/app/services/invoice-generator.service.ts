import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ItemTotal } from '../models/dto-model/itemTotal';

@Injectable({
  providedIn: 'root'
})

export class InvoiceGeneratorService {
  private invoiceSubject = new BehaviorSubject<ItemTotal>(this.getDefaulItemTotal());
  invoice$ = this.invoiceSubject.asObservable();

  generate(totalObj :ItemTotal) {
    this.invoiceSubject.next(totalObj);
  }

  getDefaulItemTotal(): ItemTotal {
    let itemTotal: ItemTotal = {
      count: 0,
      qty: 0,
      amount: 0,
      taxAmount: 0,
      finalAmount: 0,
      grossAmount: 0
    };
    return itemTotal;
  }

}
