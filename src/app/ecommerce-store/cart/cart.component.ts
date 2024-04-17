import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { StoreService } from 'src/app/core/services/store.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart!: Product[]
  totalPrice = 0

  constructor(
    private storeService: StoreService
  ){}

  ngOnInit(): void {
    this.displayCart()
    
  }

  displayCart(): void {
    this.storeService.cart.subscribe((data: Product[]) => {
      this.cart = data
      this.calculatePrice()})
  }

  calculatePrice(): void {
    this.storeService.cart.pipe(map(cartItem => {
      let totalPrice = 0
      for (let item of cartItem) {
        totalPrice += item.price * item.selectedAmount
      } return totalPrice
    })).subscribe(totalPrice => this.totalPrice = totalPrice)
  }

}
