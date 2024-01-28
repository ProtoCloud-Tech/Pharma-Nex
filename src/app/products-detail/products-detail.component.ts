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
  selectedItem!: Item;
  totalObj?: ItemTotal;

  readonly defaultRowCount = 2;
  readonly defaultQtyCount: number = 1;
  readonly defaultDiscountPercent: number = 5;
  readonly dateLocale: string = 'en-US';
  readonly dateFormatOpt: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    year: '2-digit',
  };

  itemCounter: number = 1;
  constructor(private productService: ProductService,
    private invoiceGeneratorService: InvoiceGeneratorService) {
  }

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;

      this.initializeItemRows();
      this.initializeFooterObject();
    });
  }

  initializeItemRows() {
    for (let i = 0; i < this.defaultRowCount; i++) {
      this.items.push(new Item((this.itemCounter++)));
    }
  }

  initializeFooterObject() {
    this.calculateTotalFields();
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
    item.qty = this.defaultQtyCount;
    item.discPercent = this.defaultDiscountPercent;

    this.reCalculateItems(item);
  }

  reCalculateItems(item: Item) {
    this.calculateItemAmount(item);
    this.calculateTotalFields();
  }

  calculateItemAmount(item: Item) {
    item.grossAmount = (item.mrp! * item.qty!);
    item.finalAmount = (item.grossAmount * (100 - item.discPercent!)) / 100;
    item.taxAmount = (item.finalAmount * item.gstPercent) / 100;
    item.amount = (item.finalAmount - item.taxAmount);
  }

  calculateTotalFields() {
    this.totalObj = {
      count: this.items.filter(m => m.productId > 0).length,
      amount: this.getSumOfPropertyValue(CalculatedFields.amount),
      qty: this.getSumOfPropertyValue(CalculatedFields.qty),
      taxAmount: this.getSumOfPropertyValue(CalculatedFields.taxAmount),
      finalAmount: this.getSumOfPropertyValue(CalculatedFields.finalAmount),
      grossAmount: this.getSumOfPropertyValue(CalculatedFields.grossAmount)
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

  addItem() {
    this.items.push(new Item(this.itemCounter++));
  }

  deleteItem() {
    let selectedRowIndex = this.getSelectedRowIndex();
    if (selectedRowIndex !== -1) {
      this.items.splice(selectedRowIndex, 1);
      this.calculateTotalFields();
    }
  }
  getSelectedRowIndex(): number {
    if (this.selectedItem) {
      return this.items.findIndex((object) => {
        return object.id === this.selectedItem.id;
      });
    }
    else
      return -1;
  }

  isAddItemDisabled(): boolean {
    return (this.items.some(m=>m.productId === 0 ));
  }

  isDeleteItemDisabled(): boolean {
    return (this.items.length <= 1);
  }
}

export enum CalculatedFields {
  amount = 'amount',
  qty = 'qty',
  taxAmount = 'taxAmount',
  finalAmount = 'finalAmount',
  grossAmount = 'grossAmount'
}