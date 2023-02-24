import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './products/products.module';
import { OrderModule } from './orders/orders.module';
import { CustomerModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductModule,
    OrderModule,
    CustomerModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
