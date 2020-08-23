import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const commerceRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'cart', component: CartComponent },
          { path: 'products/:productId', component: ProductDetailsComponent },
          { path: 'products', component: ProductListComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(commerceRoutes)],
  exports: [RouterModule],
})
export class CommerceRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
