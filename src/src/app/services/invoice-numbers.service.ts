import { Injectable } from '@angular/core';
import { invoiceNumber } from '../models/entity-model/invoiceNumber';

@Injectable({
  providedIn: 'root'
})
export class InvoiceNumberService {

  constructor() { }

  private invoiceNumberData : invoiceNumber[] =  [
    { id: 1, invoiceNumber: 'SGRHGTH985' },
    { id: 2, invoiceNumber: 'SFTGTEG346'},
    { id: 3, invoiceNumber: 'SDFSYRF963'}
  ];

  getAllInvoiceNumbers(): invoiceNumber[]{
    return this.invoiceNumberData;
  }
}
