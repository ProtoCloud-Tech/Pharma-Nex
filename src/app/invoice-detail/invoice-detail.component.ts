import { Component } from '@angular/core';
import { InvvoiceServicesService } from './service/invoice-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceInformation } from '../models/entity-model/invoice-information';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoice-detail',
  standalone: true,
  imports: [CommonModule,FormsModule,FormsModule],
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css'
})
export class InvoiceDetailComponent {

  invoiceData : InvoiceInformation[] = [];

  constructor(
    // private route: ActivatedRoute,
     private invvoiceservices: InvvoiceServicesService
  
   ) { }
   ngOnInit(): void {
   this.invoiceData = this.invvoiceservices.getAllInvoiceDetails();
   console.log( this.invoiceData)
   }
}
