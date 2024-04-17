import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceStoreRoutingModule } from './ecommerce-store-routing.module';
import { EcommerceStoreComponent } from './ecommerce-store.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    EcommerceStoreComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    EcommerceStoreRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class EcommerceStoreModule { }
