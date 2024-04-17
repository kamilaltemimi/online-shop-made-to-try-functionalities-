import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private cartSource = new BehaviorSubject<Product[]>([    {
    "id" : 1,
    "title" : "Airpods pro",
    "image" : "airpods.jpg",
    "description" : "【Newest Bluetooth 5.3 Technology】Our bluetooth earbuds use the Adopt the most advanced Bluetooth 5.3 technology on the market currently, which means the bluetooth earbuds have the most stable signal connection, better sound quality and lower power consumption.",
    "price" : 200.00,
    "selectedAmount" : 1
  }])
  cart = this.cartSource.asObservable()

  URL = 'http://localhost:3000/products'

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product): void {
    const currentCart = this.cartSource.value
    let duplicatedItem = false
    const updatedCart = currentCart.map(cartItem => {
      if (cartItem.id === product.id){
        duplicatedItem = true
        return {...cartItem, selectedAmount: cartItem.selectedAmount + product.selectedAmount}
      } return cartItem
    })
      if (!duplicatedItem){
        updatedCart.push(product)
    }
    this.cartSource.next(updatedCart)
  }

  emptyCart(): void {
    this.cartSource.next([])
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL)
  }


}
