import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  // các phương thức
  url = 'http://localhost:3000/user'

getList() :Observable<any>{
    return this.http.get('http://localhost:3000/user')
}
add(data: any):Observable<any>{
   return this.http.post<any>('http://localhost:3000/user',data)
}
login(data: any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/user',data)
}
// update(id:any,data: any):Observable<any>{
//   return this.http.patch<any>(`${this.url}/${id}`,data)
// }
}
