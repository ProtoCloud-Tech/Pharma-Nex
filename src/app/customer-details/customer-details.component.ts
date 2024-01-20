import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerServicesService } from './service/customer-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/entity-model/customer';
import * as _ from 'lodash';
import { DropdownModule } from 'primeng/dropdown';
import { Doctor } from '../models/entity-model/doctor';
import { DoctorDetailsService } from '../services/doctor-details.service';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { customerDetailsDto } from '../models/dto-model/customerDetailsDto';
import { InvoiceNumberService } from '../services/invoice-numbers.service';
import { invoiceNumber } from '../models/entity-model/invoiceNumber';


@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [InputTextareaModule,CalendarModule,DropdownModule,CommonModule, FormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})

export class CustomerDetailsComponent {

  customersData : Customer[] = [];
  doctorsData : Doctor[] = [];
  invoiceNumberData: invoiceNumber[] = [];
  selectedCustomerDetail: customerDetailsDto = new customerDetailsDto;

  constructor(
   // private route: ActivatedRoute,
    private customerService: CustomerServicesService,
    private doctorService : DoctorDetailsService,
    private invoiceNumberService: InvoiceNumberService
  ) { }
  
  ngOnInit(): void {

    this.customersData = this.customerService.getAllCustomers();
    this.doctorsData = this.doctorService.getAllDoctors();
    this.invoiceNumberData = this.invoiceNumberService.getAllInvoiceNumbers();
  }

  onSelectCustomer(): void {
    console.log("customer:", this.selectedCustomerDetail);
  }
}





