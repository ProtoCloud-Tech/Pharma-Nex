import { Component, OnInit } from '@angular/core';
import { Product } from '../models/entity-model/product';
import { ProductService } from './service/productservice';
import { Item } from '../models/dto-model/item';
import { SelectItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup'






@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [TableModule,InputGroupModule,InputTextareaModule,InputGroupAddonModule,CascadeSelectModule,CommonModule,FormsModule,DropdownModule,InputNumberModule,AccordionModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{
  products!: Product[];
  items: Item[] = [];
  itemCounter: number = 1;
  statuses!: SelectItem[];
  dateLocale: string = 'en-US';
  dateFormatOpt: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    year: '2-digit',
  };
  defaultDiscountPercent: number = 5;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;

      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));
    });
  }

  onProductChange(event: any, item: Item) {
    let productid = event.value;
   
    let currentProduct = this.products.filter((m) => m.id === productid).at(0);
    item.name = currentProduct?.name;
    item.batch = currentProduct?.batch;
    item.expiryDate = currentProduct?.expiryDate.toLocaleDateString(
      this.dateLocale,
      this.dateFormatOpt
    );
    item.mrp = currentProduct?.mrp;
    item.tax = currentProduct?.tax;
    item.salesTax = currentProduct?.salesTax;
    item.gstPercent = currentProduct?.gst;

    //set default values of user input field
    item.qty = 1;
    item.discPercent = this.defaultDiscountPercent;

    // update amount calculation fields
    this.calculateInitialItemAmount(item);
  }

  calculateInitialItemAmount(item?: Item) {
    if(item && item.mrp && item.discPercent && item.gstPercent){

  
    let totalMrpAmount = item.mrp * item.qty;
    item.finalAmount = (totalMrpAmount * (100 - item.discPercent)) / 100;
    item.taxAmount = (item.finalAmount * item.gstPercent) / 100;
    item.amount = item.finalAmount - item.taxAmount;
  }
  }

  onQuantityUpdate(event: any, item: Item) {
    if (event.relatedTarget) {
      item.qty = event.target.value;
      this.calculateInitialItemAmount(item);
    }
  }

  onDiscountPercentUpdate(event: any, item: Item) {
    if (event.relatedTarget) {
      item.discPercent = event.target.value;
      this.calculateInitialItemAmount(item);
    }
  }

  getSumOfPropertyValue(propertyName: string): number {
    let sumOfValues = 0;
    this.items.forEach((item) => {
      sumOfValues += !isNaN(parseFloat(item[propertyName]))
        ? parseFloat(item[propertyName])
        : 0;
    });
    return sumOfValues;
  }
}
