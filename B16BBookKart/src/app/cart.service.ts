import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ShoppingCart } from './shoppingcart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemCount = 0;
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = '/api/shoppingcart/';
  }

  addBookToCart(userId: number, bookId: number) {
    return this.http.post<number>(this.baseURL + `addToCart/${userId}/${bookId}`, {});
  }

  getCartItems(userId: number) {
    return this.http.get(this.baseURL + userId)
     
  }

  removeCartItems(userId: number, bookId: number) {
    return this.http.delete<number>(this.baseURL + `${userId}/${bookId}`, {});
  }

  deleteOneCartItem(userId: number, bookId: number) {
    return this.http.put<number>(this.baseURL + `${userId}/${bookId}`, {});
  }

  clearCart(userId: number) {
    return this.http.delete<number>(this.baseURL + `${userId}`, {});
  }

  setCart(oldUserId: number, newUserId: number):Observable<any> {
    return this.http.get(this.baseURL + `setShoppingCart/${oldUserId}/${newUserId}`, {})
      .pipe(map((response: any) => {
        this.cartItemCount = response;
        return response;
      }));
  }
}
