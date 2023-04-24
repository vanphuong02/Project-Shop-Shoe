import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ColorService } from '../services/color.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: Product[] = []
  total: number = 0;
  constructor(private card: ColorService, private route: Router) {
  }
  ngOnInit(): void {
    const productCart = JSON.parse(sessionStorage.getItem('localCart') || '[]');
    const { id, ShoeName, code, color, gender, img, price, quantity, size } = productCart
    productCart.forEach((element: Product) => {
      this.product.push(element);
      console.log(element);
    })
    this.getCart();
  }
  removeall() {
    sessionStorage.removeItem('localCart');
    if (sessionStorage.getItem('localCart') === null) {
      location.reload();
    }
  }
  getCart(): void {
    const cart = sessionStorage.getItem('localCart');
    if (cart) {
      this.product = JSON.parse(cart) as Product[];
      this.total = this.getTotal(this.product);
    }
  }

  getTotal(items: Product[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  deleteOne(index: number) {
    const cart = JSON.parse(sessionStorage.getItem('localCart') || '[]') as Product[];
    if (cart ) {
      cart.splice(index, 1);
      sessionStorage.setItem('localCart', JSON.stringify(cart));
      this.product = cart;
      this.total = this.getTotal(this.product);
      location.reload();
    }
  }
}
