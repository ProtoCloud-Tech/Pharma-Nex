import { Customer } from "../entity-model/customer";
import { Doctor } from "../entity-model/doctor";
import { invoiceNumber } from "../entity-model/invoiceNumber";

export class customerDetailsDto {

  constructor() {
    this.customer = {
      id: 0,
      name: ''
    }
    this.date = new Date();
  }
  customer: Customer
  invoiceNumber?: invoiceNumber;
  referredby?: Doctor;
  date: Date
}