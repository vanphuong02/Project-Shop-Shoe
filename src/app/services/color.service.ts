import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
import { EmitterVisitorContext } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  cartData = new EventEmitter<Product[] | []>();
  cartPay = new EventEmitter<Product[] | []>();
  public search = new BehaviorSubject<string>("")
  constructor(private http: HttpClient) { }
  getProduct(): Observable<any> {
    return this.http.get('https://64488ed3b88a78a8f0ef2838.mockapi.io/products')
  }
  getId(id: any): Observable<any> {
    return this.http.get(`https://64488ed3b88a78a8f0ef2838.mockapi.io/products/${id}`)
  }
  // localAddToCart(data: Product) {
  //   let cartData = []
  //   let localCart = sessionStorage.getItem('localCart');
  //   if (!localCart) {
  //     sessionStorage.setItem('localCart', JSON.stringify(data));
  //   } else {
  //     cartData = JSON.parse(localCart);
  //     if (Array.isArray(cartData)) {
  //       cartData.push(data);
  //       sessionStorage.setItem('localCart', JSON.stringify(cartData));
  //     } else {
  //       cartData = [cartData, data];
  //       sessionStorage.setItem('localCart', JSON.stringify(cartData));
  //     }
  //   }
  //   this.cartData.emit(cartData);
  // }
  localAddToCart(data: Product) {
    let cartData = JSON.parse(sessionStorage.getItem('localCart') || '[]');
    cartData = Array.isArray(cartData) ? cartData.concat(data) : [cartData, data];
    sessionStorage.setItem('localCart', JSON.stringify(cartData));
    this.cartData.emit(cartData);
  }

  // localAddToPay(data: Product) {
  //   let cartPay = []
  //   let localCart = sessionStorage.getItem('localCart');
  //   if (!localCart) {
  //     sessionStorage.setItem('localCart', JSON.stringify(data));
  //   } else {
  //     cartPay = JSON.parse(localCart);
  //     if (Array.isArray(cartPay)) {
  //       cartPay.push(data);
  //       sessionStorage.setItem('localCart', JSON.stringify(cartPay));
  //     } else {
  //       cartPay = cartPay, data;
  //       sessionStorage.setItem('localCart', JSON.stringify(cartPay));
  //     }
  //   }
  //   this.cartPay.emit(cartPay);
  // }
  localAddToPay(data: Product) {
    let cartPay = JSON.parse(sessionStorage.getItem('localCart') || '[]');
    cartPay = Array.isArray(cartPay) ? cartPay.concat(data) : [cartPay, data];
    sessionStorage.setItem('localCart', JSON.stringify(cartPay));
    this.cartPay.emit(cartPay);
  }
}

