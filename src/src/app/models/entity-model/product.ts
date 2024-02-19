export interface Product {
  id: number;
  name: string;
  batch: string;
  expiryDate: Date;
  mrp: number;
  tax: string;
  salesTax: string;
  gst: number;
}
