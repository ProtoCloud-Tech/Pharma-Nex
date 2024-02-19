import { Customer } from "../entity-model/customer";
import { Doctor } from "../entity-model/doctor";
import { invoiceNumber } from "../entity-model/invoiceNumber";

export class customerDetailsDto {

  constructor() {
    this.date = new Date();
  }
  customer?: Customer
  invoiceNumber?: string;
  referredby?: Doctor;
  date: Date
}