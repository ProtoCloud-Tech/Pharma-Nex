import { Injectable } from '@angular/core';
import { InvoiceInformation } from '../../models/entity-model/invoice-information';


@Injectable({
  providedIn: 'root'
})
export class InvvoiceServicesService {

 private invoiceAllDetails : any = [
    { id: 1, gross: '55625.00', billamount: '55625.00', totaltax: '2781.25', cgst:'1390.625', sgst:'1390.625', discounts:'100' ,roundoff:'0.25',net:'58306.00',due:'50000' },
  ];
  
  constructor() { }

  getAllInvoiceDetails(): InvoiceInformation[]{
    return this.invoiceAllDetails;
  }
}