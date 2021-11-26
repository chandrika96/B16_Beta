import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemCount = 0;
  baseURL!: string;
  constructor(private http: HttpClient) {
    this.baseURL = 'https://bookcart.azurewebsites.net/api/ShoppingCart/';
   }
  addBookToCart(userId: number, bookId: number) :Observable<any>{
    return this.http.post<number>(this.baseURL + `addToCart/${userId}/${bookId}`, {});
  }
}
