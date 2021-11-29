import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShopingcartService {
  baseURL = 'https://bookcart.azurewebsites.net/api';
  constructor(private http: HttpClient) { }
  addToCart(): Observable<any>{
    //let userId = sessionStorage.getItem('userId')
    let userId = 295;
    let bookId=5;
    return this.http.post<any>(`https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/${userId}/${bookId}`, {});
  }

  getCartItemsByUserId(): Observable<any> {
    let userId=295;
    return this.http.get<any>(this.baseURL+'/ShoppingCart/'+userId);
  }
  removeCartItems(): Observable<any>{
    let userId=295;
    return this.http.delete<any>(this.baseURL+'/ShoppingCart/'+userId);
  }

}