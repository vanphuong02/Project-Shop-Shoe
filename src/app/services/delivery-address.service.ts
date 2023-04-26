import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryAddressService {

  constructor(private http: HttpClient) { }
  getCitys() : Observable<any> {
    return this.http.get('https://6448c93ae7eb3378ca35bd3d.mockapi.io/province')
 }
 getDistricts(id: string):Observable<any>{
   return this.http.get(`https://6448c93ae7eb3378ca35bd3d.mockapi.io/district/?idProvince=${id}`)
 }
 getVillages(id:string) :Observable<any>{
   return this.http.get(`https://6448cb05e7eb3378ca35ea13.mockapi.io/commune/?idDistrict=${id}`)
 }
}
