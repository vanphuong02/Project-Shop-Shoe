import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingInformationService {
  constructor(private http : HttpClient) { }
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   })
  // };
  add(data : any) : Observable<any>{
     return this.http.post<any>('https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformation', data)
  }
}
