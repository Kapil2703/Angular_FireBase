import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceRoutingModule } from './commerce-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    HomepageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductAlertsComponent,
    ShippingComponent
  ],
  imports: [CommonModule, CommerceRoutingModule],
})
export class CommerceModule {}
