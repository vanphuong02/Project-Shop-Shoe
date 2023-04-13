import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public search = new BehaviorSubject<string>("")
  product: any;

  constructor(private http: HttpClient) { }
  getProduct(): Observable<any> {
    return this.http.get('http://localhost:3000/Products')
  }
  getId(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/Products/' + id)
  }
  localAddTocard(data: Product) {
    let cardData = []
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cardData = JSON.parse(localCart);
      cardData.push(data)
      localStorage.setItem('localCart', JSON.stringify([cardData]));
    }

  }
}

