import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceStoreModule } from './ecommerce-store/ecommerce-store.module';

const routes: Routes = [
  {path: '',
  loadChildren: () => import('./ecommerce-store/ecommerce-store.module').then(m => m.EcommerceStoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
