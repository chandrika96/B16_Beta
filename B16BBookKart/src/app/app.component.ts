import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { CartService } from './cart.service';
import { SubscriptionService } from './subscription.service';


import { User } from './user';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';

  constructor(private authService: AuthenticationService) {
    if (!localStorage.getItem('authToken')) {
      this.authService.setTempUserId();
    }
    this.authService.setUserDetails();
  }
}

   