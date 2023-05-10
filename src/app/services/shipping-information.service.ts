import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ShipInformation } from '../shipInformation';

@Injectable({
  providedIn: 'root'
})
export class ShippingInformationService {
<<<<<<< HEAD
  constructor(private http : HttpClient) { }
  add(data : any) : Observable<ShipInformation>{
     return this.http.post<ShipInformation>('https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformations', data)
  }

}
=======
  constructor(private http: HttpClient) { }
  add(data: any): Observable<ShipInformation> {
    return this.http.post<ShipInformation>('https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformations', data)
  }
  delete(idUser: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`https://64488ed3b88a78a8f0ef2838.mockapi.io/cart?idUser=${idUser}`);
  }
}
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
