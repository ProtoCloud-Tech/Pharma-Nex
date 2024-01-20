import { Injectable } from '@angular/core';
import { invoice } from '../models/entity-model/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailsService {

  constructor() { }

  private invoiceData : invoice[] =  [
    { id: 1, invoiceNumber: 'SGRHGTH985' },
    { id: 2, invoiceNumber: 'SFTGTEG346'},
    { id: 3, invoiceNumber: 'SDFSYRF963'}
  ];

  getAllInvoices(): invoice[]{
    return this.invoiceData;
  }
}
