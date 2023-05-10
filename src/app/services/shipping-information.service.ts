import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ShipInformation } from '../shipInformation';

@Injectable({
  providedIn: 'root'
})
export class ShippingInformationService {
  constructor(private http : HttpClient) { }
  add(data : any) : Observable<ShipInformation>{
     return this.http.post<ShipInformation>('https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformations', data)
  }

}
