import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  addProduct(data:Product){
    return this.http.post('https://64488ed3b88a78a8f0ef2838.mockapi.io/products',data)
  }
  productList(){
    return this.http.get<Product[]>('https://64488ed3b88a78a8f0ef2838.mockapi.io/products');
  }
  deleteProduct(id:number){
    return this.http.delete(`https://64488ed3b88a78a8f0ef2838.mockapi.io/products/${id}`);
  }
  getProduct(id:string){
    return this.http.get<Product>(`https://64488ed3b88a78a8f0ef2838.mockapi.io/products/${id}`);
  }
  updateProduct(product: Product) { 
    return this.http.put<Product>(`https://64488ed3b88a78a8f0ef2838.mockapi.io/products/${product.id}`,product);
  }
}
