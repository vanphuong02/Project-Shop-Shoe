import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  NameLogin = new EventEmitter<any|"">();
  constructor(private http : HttpClient) { }
  // các phương thức
  mockapi = 'https://644732497bb84f5a3e39d8b7.mockapi.io/users'
getList() :Observable<any>{
    return this.http.get('https://644732497bb84f5a3e39d8b7.mockapi.io/users')
}
add(data: any):Observable<any>{
   return this.http.post<any>('https://644732497bb84f5a3e39d8b7.mockapi.io/users',data)
}
login(data: any):Observable<any>{
    return this.http.get<any>('https://644732497bb84f5a3e39d8b7.mockapi.io/users',data)
}
// update(id:any,data: any):Observable<any>{
//   return this.http.patch<any>(`${this.url}/${id}`,data)
// }
}
