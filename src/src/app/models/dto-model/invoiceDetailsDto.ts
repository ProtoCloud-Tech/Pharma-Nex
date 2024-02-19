import { ThisReceiver } from "@angular/compiler";

export class invoiceDetailsDto {
  constructor(grossAmount: number, billAmount: number, cgst: number, sgst: number, discount: number, 
    cashDiscount: number, otherAdjustment: number, paid: number) {
    this.grossAmount = grossAmount;
    this.cgst = cgst;
    this.sgst = sgst;
    this.billAmount = billAmount;
    this.discount = discount;
    this.cashDiscount = cashDiscount;
    this.otherAdjustment = otherAdjustment;
    this.paid = paid;
    this.totalTax = this.getTotalTax();
    this.net = this.getRoundedOffNet();;
    this.roundOff = this.getRoundOffVal();
    this.due = this.getDue();
  }

  grossAmount: number;
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
    return (this.billAmount + this.totalTax - this.cashDiscount - this.otherAdjustment);
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
    return (this.grossAmount - this.cashDiscount - this.otherAdjustment);
  }
}
