import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { invoiceDetailsDto } from "../models/dto-model/invoiceDetailsDto";

@Component({
  selector: "app-invoice-detail",
  standalone: true,
  imports: [CommonModule, FormsModule, FormsModule],
  templateUrl: "./invoice-detail.component.html",
  styleUrl: "./invoice-detail.component.css",
})
export class InvoiceDetailComponent {
  gross: number = 55625;
  cgst: number = 1390.625;
  sgst: number = 1390.625;
  discount: number = 100;
  paid: number = 8306;

  invoiceDetail: invoiceDetailsDto = new invoiceDetailsDto(
    this.gross,
    this.cgst,
    this.sgst,
    this.discount,
    this.paid
  );

  ngOnInit(): void {
    console.log(this.invoiceDetail);
  }
}
