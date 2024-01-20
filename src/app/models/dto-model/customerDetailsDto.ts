import { Customer } from "../entity-model/customer";
import { Doctor } from "../entity-model/doctor";
import { invoice } from "../entity-model/invoice";

export class customerDetailsDto {

  constructor() {
    this.customer = {
      id: 0,
      name: ''
    }
    this.date = new Date();
  }
  customer: Customer
  invoiceNumber?: invoice;
  referredby?: Doctor;
  date: Date
}