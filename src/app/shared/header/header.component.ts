import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartAmount: number = 0

  constructor(
    private storeService: StoreService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.storeService.cart.pipe(map(data => {
      let amount = 0
      for (let i = 0; i < data.length; i++) {
        amount += Number(data[i].selectedAmount)
      } return amount
    })).subscribe(data => this.cartAmount = data)

  }

  emptyCart(): void {
    this.storeService.emptyCart()
  }

  navigate(): void{
    this.router.navigate(['cart'])
  }

}
