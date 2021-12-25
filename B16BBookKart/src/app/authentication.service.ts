import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SubscriptionService } from './subscription.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  oldUserId!: any;

  constructor(
    private http: HttpClient,
    private subscriptionService: SubscriptionService) { }

  login(user: any) {
    return this.http.post<any>('/api/login', user)
      .pipe(map(response => {
        if (response && response.token) {
          this.oldUserId = localStorage.getItem('userId');
          localStorage.setItem('authToken', response.token);
          this.setUserDetails();
          localStorage.setItem('userId', response.userDetails.userId);
          this.subscriptionService.cartItemcount$.next(response.carItemCount);
        }
        return response;
      }));
  }

  setUserDetails() {
    if (localStorage.getItem('authToken')) {
      const userDetails = new User();
      const decodeUserDetails = JSON.parse(atob(localStorage.getItem('authToken')||'{}'));

      userDetails.userId = decodeUserDetails.userid;
      userDetails.username = decodeUserDetails.sub;
      userDetails.userTypeId = Number(decodeUserDetails.userTypeId);
      userDetails.isLoggedIn = true;

      this.subscriptionService.userData.next(userDetails);
    }
  }

  logout() {
    localStorage.clear();
    this.resetSubscription();
    this.setTempUserId();
  }

  setTempUserId() {
    if (!localStorage.getItem('userId')) {
      const tempUserID = this.generateTempUserId();
      localStorage.setItem('userId', tempUserID.toString());
    }
  }

  generateTempUserId() {
    return Math.floor(Math.random() * (99999 - 11111 + 1) + 12345);
  }

  resetSubscription() {
    this.subscriptionService.userData.next(new User());
    this.subscriptionService.wishlistItem$.next([]);
    this.subscriptionService.wishlistItemcount$.next(0);
    this.subscriptionService.cartItemcount$.next(0);
  }
}
