import { Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

export const routes: Routes = [
    { path: '', component: CustomerDetailsComponent },
    // add other routes as needed
    { path: '', redirectTo: '', pathMatch: 'full' }, // default route
];
