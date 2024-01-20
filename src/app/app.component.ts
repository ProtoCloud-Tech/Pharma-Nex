import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule,ButtonModule,RouterOutlet,CustomerDetailsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [BrowserAnimationsModule],
})
export class AppComponent {
  title = 'pharmanex';
}
