import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticlesComponent } from "./articles/articles.component";
import { EventsModule } from "./events/events.module";
//import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreModule } from "./core/core.module";


import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartService } from './cart.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [AppComponent, ArticlesComponent, TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent],
  imports: [BrowserModule, AppRoutingModule, EventsModule, CoreModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
