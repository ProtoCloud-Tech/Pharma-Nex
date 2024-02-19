import { Injectable } from '@angular/core';
import { Doctor } from '../models/entity-model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailsService {

  constructor() { }

  private doctorsData : Doctor[] =  [
    { id: 1, name: 'Dr. Vijay' },
    { id: 2, name: 'Dr. Abhinandan Sundaram'},
    { id: 3, name: 'Dr. Sandeep Sharma'},
  ];

  getAllDoctors(): Doctor[]{
    return this.doctorsData;
  }
}
