import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  cartItems = new BehaviorSubject<Product[]>([]);
  public search = new BehaviorSubject<string>("");
  cartItemAdded = new EventEmitter<Product>();
  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get('https://64488ed3b88a78a8f0ef2838.mockapi.io/products');
  }

  getId(id: any): Observable<any> {
    return this.http.get('https://64488ed3b88a78a8f0ef2838.mockapi.io/products/' + id);
  }

  postToCart(data: Product): Observable<any> {
    const currentCartItems = this.cartItems.value;
    const existingProduct = currentCartItems.find(item => item.id === data.id && item.size === data.size);

    if (existingProduct) {
      // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
      existingProduct.quantity += data.quantity;
      this.cartItems.next(currentCartItems);
      return of(existingProduct);
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới
      return this.http.post('https://64488ed3b88a78a8f0ef2838.mockapi.io/cart', data).pipe(
        map((response: any) => {
          currentCartItems.push(response);
          this.cartItems.next(currentCartItems);
          this.cartItemAdded.emit(response);
          return response;
        })
      );
    }
  }
  postToPay(data: Product): Observable<any> {
    return this.http.post('https://64488ed3b88a78a8f0ef2838.mockapi.io/cart', data)
  }
  getCartItems(idUser: number): Observable<any> {
    return this.http.get(`https://64488ed3b88a78a8f0ef2838.mockapi.io/cart?idUser=${idUser}`);
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
