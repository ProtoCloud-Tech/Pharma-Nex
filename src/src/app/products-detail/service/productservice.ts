import { Injectable } from '@angular/core';
import { Product } from '../../models/entity-model/product';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  getProductsData(): Product[] {
    return [
      {
        id: 1,
        name: 'Augmentin 625 Duo Tablet',
        batch: 'APO05N51',
        expiryDate: new Date(2026, 7, 30),
        mrp: 438.82,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 5,
      },
      {
        id: 2,
        name: 'Azithral 500 Tablet',
        batch: 'HRP07D05',
        expiryDate: new Date(2025, 3, 30),
        mrp: 265.5,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 5,
      },
      {
        id: 3,
        name: 'Ascoril LS Syrup',
        batch: 'PJD96V34',
        expiryDate: new Date(2027, 5, 25),
        mrp: 98.13,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 12,
      },
      {
        id: 4,
        name: 'Allegra 120mg Tablet',
        batch: 'JGF42B76',
        expiryDate: new Date(2025, 2, 15),
        mrp: 145,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 12,
      },
      {
        id: 5,
        name: 'Mypod 200mg Tablet',
        batch: 'PHW76B21',
        expiryDate: new Date(2025, 11, 3),
        mrp: 734.34,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 18,
      },
      {
        id: 6,
        name: 'Methocel 50mg Injection',
        batch: 'YHF87N34',
        expiryDate: new Date(2028, 10, 13),
        mrp: 873,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 18,
      },
      {
        id: 7,
        name: 'Macrozac 250mg Tablet',
        batch: 'AHD18V62',
        expiryDate: new Date(2026, 4, 2),
        mrp: 350.13,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 12,
      },
      {
        id: 8,
        name: 'Qupin 50mg Tablet',
        batch: 'QDF28S21',
        expiryDate: new Date(2028, 9, 15),
        mrp: 234.78,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 5,
      },
      {
        id: 9,
        name: 'Zycet 10mg Tablet',
        batch: 'PHQ23N45',
        expiryDate: new Date(2027, 9, 20),
        mrp: 145.35,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 12,
      },
      {
        id: 10,
        name: 'Zolyn 600mg Tablet',
        batch: 'PJE48F34',
        expiryDate: new Date(2027, 8, 25),
        mrp: 875.5,
        tax: 'TPG1',
        salesTax: 'TSG1',
        gst: 18,
      },
    ];
  }
  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
