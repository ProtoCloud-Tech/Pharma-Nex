import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerServicesService } from './service/customer-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/entity-model/customer';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { LoDashExplicitArrayWrapper } from 'lodash';
import { DropdownModule } from 'primeng/dropdown';
import { Doctor } from '../models/entity-model/doctor';
import { DoctorDetailsService } from '../services/doctor-details.service';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { customerDetailsDto } from '../models/dto-model/customerDetailsDto';
import { InvoiceDetailsService } from '../services/invoice-details.service';
import { invoice } from '../models/entity-model/invoice';


@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [InputTextareaModule,CalendarModule,DropdownModule,CommonModule, FormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  selectedCustomerDetail: customerDetailsDto = new customerDetailsDto;

  customersData : Customer[] = [];
  doctorsData : Doctor[] = [];
  invoicesData: invoice[] = [];

  //filteredCustomerDataSrc: Customer[] = [];
  //filteredDoctorsDataSrc: Doctor[] = [];

  constructor(
   // private route: ActivatedRoute,
    private customerService: CustomerServicesService,
    private doctorService : DoctorDetailsService,
    private invoiceService: InvoiceDetailsService
  ) { }
  
  ngOnInit(): void {

    this.customersData = this.customerService.getAllCustomers();
    this.doctorsData = this.doctorService.getAllDoctors();
    this.invoicesData = this.invoiceService.getAllInvoices();

    //this.filteredCustomerDataSrc = _.cloneDeep(this.customersData); //(lodash lib - deep copy)
    //this.filteredDoctorsDataSrc = _.cloneDeep(this.doctorsData); //(lodash lib - deep copy)
  }

  onSelectCustomer(): void {
    console.log("customer:", this.selectedCustomerDetail);
  }
}





