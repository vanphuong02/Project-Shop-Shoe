import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipInformation } from '../shipInformation';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
// status = 0 đơn hàng mới khởi tạo
  constructor(private http: HttpClient) { }
  getHistory(idUser:number):Observable<ShipInformation>{
     return this.http.get<ShipInformation>(`https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformation?idUser=${idUser}`)
  }
  getOrder(id: number): Observable<ShipInformation[]> {
     return this.http.get<ShipInformation[]>(`https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformation?idUser=${id}`)
  }
  getOrderComplete(idUser:number,status: number = 2): Observable<ShipInformation[]> {
    return this.http.get<ShipInformation[]>(`https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformation?idUser=${idUser}&status=${status}`)
  }
  getOrderReject(idUser:number,status: number = -1): Observable<ShipInformation[]> {
    return this.http.get<ShipInformation[]>(`https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformation?idUser=${idUser}&status=${status}`)
  }
  getIdOrder(idUser:number,id:number): Observable<ShipInformation> {
    return this.http.get<ShipInformation>(`https://6448cb05e7eb3378ca35ea13.mockapi.io/shipInformation/${id}`)
  }
}
