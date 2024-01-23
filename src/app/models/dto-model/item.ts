export class Item {
  constructor(id: number) {
    this.id = id;
    this.qty = 0;
  }

  id: number;
  productId: number;
  name?: string;
  batch?: string;
  expiryDate?: string;
  mrp?: number;
  qty: number;
  discPercent?: number;
  tax?: string;
  salesTax?: string;
  amount?: number;
  gstPercent?: number;
  taxAmount?: number;
  finalAmount?: number;
}
