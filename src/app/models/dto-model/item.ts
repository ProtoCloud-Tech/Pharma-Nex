export class Item {
  constructor(id: number) {
    this.id = id;
    this.productId = 0;
    this.name = '';
    this.batch = '';
    this.expiryDate = '';
    this.mrp = 0;
    this.qty = 0;
    this.discPercent = 0;
    this.tax = '';
    this.salesTax = '';
    this.amount = 0;
    this.gstPercent = 0;
    this.taxAmount = 0;
    this.finalAmount = 0;
    this.grossAmount = 0;

  }
  id: number;
  productId: number;
  name: string;
  batch: string;
  expiryDate: string;
  mrp: number;
  qty: number;
  discPercent: number;
  tax: string;
  salesTax: string;
  amount: number;
  gstPercent: number;
  taxAmount: number;
  finalAmount: number;
  grossAmount: number;
}
