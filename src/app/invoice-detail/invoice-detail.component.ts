import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { invoiceDetailsDto } from "../models/dto-model/invoiceDetailsDto";
import { InvoiceGeneratorService } from "../services/invoice-generator.service";
import { ItemTotal } from "../models/dto-model/itemTotal";

@Component({
  selector: "app-invoice-detail",
  standalone: true,
  imports: [CommonModule, FormsModule, FormsModule],
  templateUrl: "./invoice-detail.component.html",
  styleUrl: "./invoice-detail.component.css",
})
export class InvoiceDetailComponent {

  cashDiscount:number = 0;
  otherAdjustment:number = 0;
  paid:number = 0;
  invoiceDetail!: invoiceDetailsDto;
  constructor(private invoiceGeneratorService: InvoiceGeneratorService) { }

  ngOnInit(): void {
    this.invoiceGeneratorService.invoice$.subscribe((totalObj:ItemTotal) => {
      this.invoiceDetail = new invoiceDetailsDto(
        totalObj.grossAmount,
        totalObj.amount,
        totalObj.taxAmount/2,
        totalObj.taxAmount/2,
        (totalObj.grossAmount - totalObj.finalAmount),
        this.cashDiscount,
        this.otherAdjustment,
        this.paid
      );
    });
  }

  onCashDiscountUpdate(event: any) {
    if (event.relatedTarget) {
      this.invoiceDetail.cashDiscount = this.cashDiscount;
      this.updateInvoice();
    }
  }
  
  onOtherAdjustmentUpdate(event: any) {
    if (event.relatedTarget) {
      this.invoiceDetail.otherAdjustment = this.otherAdjustment
      this.updateInvoice();
    }
  }

  onPaidUpdate(event: any) {
    if (event.relatedTarget) {
      this.invoiceDetail.paid =this.paid;
      this.updateInvoice();
    }
  }

  updateInvoice() {
    this.invoiceDetail = new invoiceDetailsDto(
      this.invoiceDetail.grossAmount,
      this.invoiceDetail.billAmount,
      this.invoiceDetail.cgst,
      this.invoiceDetail.sgst,
      this.invoiceDetail.discount,
      this.invoiceDetail.cashDiscount,
      this.invoiceDetail.otherAdjustment,
      this.invoiceDetail.paid
    );
  }
  
}
