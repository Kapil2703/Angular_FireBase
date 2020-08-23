import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsModule } from './events/events.module';
import { ArticlesComponent } from './articles/articles.component';
import { AuthGuard } from './core/auth.guard';
import { ProductListComponent } from './commerce/product-list/product-list.component';
import { ProductDetailsComponent } from './commerce/product-details/product-details.component';
import { CartComponent } from './commerce/cart/cart.component';
import { ShippingComponent } from './commerce/shipping/shipping.component';
import { TodoComponent } from './todos/todo/todo.component';
//import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  //{ path: '/', component: HomeComponent },
  //{
  //path: 'articles',
  //component: ArticlesComponent,
  //loadChildren: './events/events.module#EventsModule',
  //},
  //{ path: 'notes', component: ArticlesComponent, canActivate: [AuthGuard] },
  //{ path: 'c/todos', component: TodoComponent },
  // { path: 'c', component: ProductListComponent },
  // { path: 'c/products/:productId', component: ProductDetailsComponent },
  // { path: 'c/cart', component: CartComponent },
  // { path: 'c/shipping', component: ShippingComponent },

  {
    path: 'commerce',
    loadChildren: () =>
      import('./commerce/commerce.module').then((m) => m.CommerceModule),
  },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
