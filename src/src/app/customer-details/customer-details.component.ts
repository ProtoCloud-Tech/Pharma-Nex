import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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
import { Dropdown } from 'primeng/dropdown';
import { AutoFocus } from 'primeng/autofocus';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [InputTextareaModule, CalendarModule, DropdownModule, CommonModule, FormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})

export class CustomerDetailsComponent implements AfterViewInit {
  @ViewChild('customerDetailsDropdown') customerDetailsDropdown!: Dropdown;
  @ViewChild('docDropdown') docDropdown!: Dropdown;

  ngAfterViewInit(): void {
    setTimeout(() => {
       if (this.customerDetailsDropdown) {
        this.customerDetailsDropdown.applyFocus();
        this.customerDetailsDropdown.overlayVisible = true;
       }
    });
  }

  customersData: Customer[] = [];
  doctorsData: Doctor[] = [];
  invoiceNumberData: invoiceNumber[] = [];
  selectedCustomerDetail: customerDetailsDto = new customerDetailsDto;
  selectedGstNumber!: number;
  selectedCustomerAddress!: string;

  constructor(
    // private route: ActivatedRoute,
    private customerService: CustomerServicesService,
    private doctorService: DoctorDetailsService,
    private invoiceNumberService: InvoiceNumberService
  ) { }

  ngOnInit(): void {
    this.customersData = this.customerService.getAllCustomers();
    this.doctorsData = this.doctorService.getAllDoctors();
    this.invoiceNumberData = this.invoiceNumberService.getAllInvoiceNumbers();
    this.selectedCustomerDetail.invoiceNumber = "INV-000001"
  }

  onSelectCustomer(event: any): void {
    if (event.value) {
      this.selectedGstNumber = event.value.gstNumber;
      this.selectedCustomerAddress = event.value.address;
    }
  }

  onSelectDoctor(event: any): void {
  }

  onFocusEvent(event: any) {
    if (this.customerDetailsDropdown) {
      if ((event.relatedTarget != null && event.sourceCapabilities != null)) {
        this.customerDetailsDropdown.show(true);
      }
      else {
        this.customerDetailsDropdown.hide(true);
      }
    }
  }

  onDocFocusEvent(event: any) {
    if (this.docDropdown) {
      if ((event.relatedTarget != null && event.sourceCapabilities != null)) {
        this.docDropdown.show(true);
      }
      else {
        this.docDropdown.hide(true);
      }
    }
  }
}