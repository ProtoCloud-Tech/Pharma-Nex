import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule,ButtonModule,RouterOutlet,LeftSidebarComponent,InvoiceDetailComponent,CustomerDetailsComponent, CommonModule,ProductsDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [BrowserAnimationsModule],
})
export class AppComponent {
  title = 'pharmanex';

  isClassAdded: boolean = true;

  handleToggleClass() {
    this.isClassAdded = !this.isClassAdded;
  }
}
