import { Injectable } from '@angular/core';
import { Customer } from '../../models/entity-model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {

 private customerData : any = [
    { id: 1, name: 'Harshit Sharma', gstNumber: '32AFTGD8375R0A5', address: '69 Vinayak Vihar, Rawan Gate Kalwar Road, Jhotwara, Jaipur' },
    { id: 2, name: 'Vijay Raj', gstNumber: '29GGGGG1314R9Z6', address: '6/1, Anand Vihar, Jagadamba Nagar, Alwar'},
    { id: 3, name: 'Abhinandan Kumar', gstNumber: '45AFFGG1312F8E3', address: '1/3, Jhalawar Vihar, Kalwar Road, Jaipur 302012' },
  ];
  
  constructor() { }

  getAllCustomers(): Customer[]{
    return this.customerData;
  }
}
