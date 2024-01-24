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
import { ItemTotal } from '../models/dto-model/itemTotal';
import { InvoiceGeneratorService } from '../services/invoice-generator.service';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [TableModule, InputGroupModule, InputTextareaModule, InputGroupAddonModule, CascadeSelectModule, CommonModule, FormsModule, DropdownModule, InputNumberModule, AccordionModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit {
  products: Product[] = [];
  items: Item[] = [];
  totalObj?: ItemTotal;

  itemCounter: number = 1;
  dateLocale: string = 'en-US';
  dateFormatOpt: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    year: '2-digit',
  };
  defaultDiscountPercent: number = 5;

  constructor(private productService: ProductService,
    private invoiceGeneratorService: InvoiceGeneratorService) {
  }

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;

      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));
      this.items.push(new Item(this.itemCounter++));

      this.calculateTotalFields();
    });
  }

  onProductChange(event: any, item: Item) {
    let productid = event.value;

    let currentProduct: Product | undefined = this.products.find((m) => m.id === productid);
    if (currentProduct) {
      item.name = currentProduct.name;
      item.batch = currentProduct.batch;
      item.expiryDate = currentProduct.expiryDate.toLocaleDateString(
        this.dateLocale,
        this.dateFormatOpt
      );
      item.mrp = currentProduct.mrp;
      item.tax = currentProduct.tax;
      item.salesTax = currentProduct.salesTax;
      item.gstPercent = currentProduct.gst;
    }

    //set default values of user input field
    item.qty = 1;
    item.discPercent = this.defaultDiscountPercent;

    // update amount calculation fields
    this.calculateItemAmount(item);
  }

  onQuantityUpdate(event: any, item: Item) {
    if (event.relatedTarget) {
      let quantity = event.target.value;
      item.qty = quantity as number;
      this.calculateItemAmount(item);
    }
  }

  onDiscountPercentUpdate(event: any, item: Item) {
    if (event.relatedTarget) {
      item.discPercent = event.target.value;
      this.calculateItemAmount(item);
    }
  }

  calculateItemAmount(item: Item) {
    item.grossAmount = item.mrp * item.qty;
    item.finalAmount = (item.grossAmount * (100 - item.discPercent)) / 100;
    item.taxAmount = (item.finalAmount * item.gstPercent) / 100;
    item.amount = item.finalAmount - item.taxAmount;
    this.calculateTotalFields();

  }

  calculateTotalFields() {
    this.totalObj = {
      count: this.items.filter(m => m.productId > 0).length,
      amount: this.getSumOfPropertyValue('amount'),
      qty: this.getSumOfPropertyValue('qty'),
      taxAmount: this.getSumOfPropertyValue('taxAmount'),
      finalAmount: this.getSumOfPropertyValue('finalAmount'),
      grossAmount: this.getSumOfPropertyValue('grossAmount')
    }

    this.invoiceGeneratorService.generate(this.totalObj);
  }

  getSumOfPropertyValue(propertyName: string): number {
    const str: keyof Item = propertyName as keyof Item;

    let sumOfValues = 0;
    this.items.forEach((item: Item) => {
      if (typeof item[str] === 'number') {
        sumOfValues += item[str] as number;
      } else if (typeof item[str] === 'string') {
        sumOfValues += parseFloat(item[str] as string);
      } 
    });
    return sumOfValues;
  }

}
