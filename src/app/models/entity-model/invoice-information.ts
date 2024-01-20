export interface InvoiceInformation {
    id:number
    gross: number;
    billamount?: number;
    totaltax?: number;
    cgst: number;
    sgst: number;
    discounts: number;
    roundoff: number;
    net: number;
    due:number;
  }
  