import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseURL = 'https://bookcart.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  addToWistList(): Observable<any>{
    //let userId = sessionStorage.getItem('userId')
    let userId = 295;
    let bookId=5;
    return this.http.post<any>(`https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${userId}/${bookId}`, {});
  }

  wishList(): Observable<any>{
    let userId=295;
    //let bookId=3
    //let data={};
    //let access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYWhlYkphbmEiLCJ1c2VyaWQiOiIyOTMiLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiI0YzgzMjM0MS04OGEzLTRlNGYtYWQ2MC1lZjEyODRhNDE0MjYiLCJleHAiOjE2MzI5Mzc3MzUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.EtM5_FQXEt4m77kukjNO0O6EgCSM3LeL2aSb3oTQTv8";
    //let httpParams = new HttpParams().set('token', access_token);
    //let options = { params: httpParams }; 
    return this.http.get<any>(this.baseURL+'/Wishlist/'+userId);
  }
  removewishListItem(): Observable<any>{
    let userId=295;
    return this.http.delete<any>(this.baseURL+'/Wishlist/'+userId);
  }
}