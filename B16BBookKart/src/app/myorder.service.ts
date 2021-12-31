import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {
readonly baseUrl :string = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  myOrderDetails():Observable<any>{
    let userId=339;
    return this.http.get<any>(this.baseUrl+ userId);
  }
}
