import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  cartItems = new BehaviorSubject<Product[]>([]);
  // cartData = new EventEmitter<Product[] | []>();
  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get('https://64488ed3b88a78a8f0ef2838.mockapi.io/products');
  }

  getId(id: any): Observable<any> {
    return this.http.get('https://64488ed3b88a78a8f0ef2838.mockapi.io/products/' + id);
  }

  postToCart(data: Product): Observable<any> {
    return this.http.post('https://64488ed3b88a78a8f0ef2838.mockapi.io/cart', data).pipe(
      tap(() => {
        const currentCartItems = this.cartItems.value;
        const newCartItems = [...currentCartItems, data];
        this.cartItems.next(newCartItems);
      })
    );
  }
  postToPay(data: Product): Observable<any> {
    return this.http.post('https://64488ed3b88a78a8f0ef2838.mockapi.io/cart', data).pipe(
      tap(() => {
        const currentCartItems = this.cartItems.value;
        const newCartItems = [...currentCartItems, data];
        this.cartItems.next(newCartItems);
      })
    );
  }
  getCartItems(): Observable<any> {
    return this.http.get('https://64488ed3b88a78a8f0ef2838.mockapi.io/cart');
  }
  deleteCartItem(id: number): Observable<any> {
    return this.http.delete('https://64488ed3b88a78a8f0ef2838.mockapi.io/cart/' + id).pipe(
      tap(() => {
        const currentCartItems = this.cartItems.value;
        const newCartItems = currentCartItems.filter(item => item.id !== id);
        this.cartItems.next(newCartItems);
      })
    );
  }
}
