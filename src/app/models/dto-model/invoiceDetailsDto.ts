import { ThisReceiver } from "@angular/compiler";

export class invoiceDetailsDto {
  constructor(gross: number, cgst: number, sgst: number, discount: number, paid: number) {
    this.gross = gross;
    this.cgst = cgst;
    this.sgst = sgst;
    this.discount = discount;
    this.paid = paid;
    this.cashDiscount = 0;
    this.otherAdjustment = 0;
    this.billAmount = this.getBillAmount();
    this.totalTax = this.getTotalTax();
    this.net = this.getRoundedOffNet();;
    this.roundOff = this.getRoundOffVal();
    this.due = this.getDue();
  }

  gross: number;
  cashDiscount: number;
  otherAdjustment: number;
  billAmount: number;
  totalTax: number;
  cgst: number;
  sgst: number;
  discount: number;
  roundOff: number;
  net: number;
  paid: number;
  due: number;

  public getTotalTax(): number {
    return (this.cgst + this.sgst);
  }

  public getNet(): number {
    return (this.billAmount + this.totalTax - this.discount);
  }

  public getRoundedOffNet(): number {
    return Math.floor(this.getNet());
  }

  public getRoundOffVal(): number {
    return (this.getNet() - this.getRoundedOffNet());
  }

  public getDue(): number {
    return (this.net - this.paid);
  }

  public getBillAmount(): number {
    return (this.gross - this.cashDiscount - this.otherAdjustment);
  }
}
