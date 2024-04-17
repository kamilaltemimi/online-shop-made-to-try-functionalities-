import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceStoreComponent } from './ecommerce-store.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: EcommerceStoreComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceStoreRoutingModule { }
