import { Component, OnInit } from '@angular/core';
import { StoreService } from '../core/services/store.service';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-ecommerce-store',
  templateUrl: './ecommerce-store.component.html',
  styleUrls: ['./ecommerce-store.component.scss']
})
export class EcommerceStoreComponent implements OnInit {

  products!: Product[]
  selectedAmount!: number

  constructor(
    private storeService: StoreService
  ){}

  ngOnInit(): void {
    this.getProducts()
  }

  addToCart(product: Product, amount: number): void {
    this.storeService.addToCart({...product, selectedAmount: amount})
    console.log(this.storeService.cart)
  }
  
  getProducts(): void{
    this.storeService.getProducts().subscribe(data => this.products = data)
  }

  selectAmount(selectedAmount: Event){
    const selectedOption = (selectedAmount.target as HTMLInputElement).value
    this.selectedAmount = Number(selectedOption)
  }
}
