import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SubscriptionService } from '../subscription.service';
import { User } from '../user';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userId:any;
  userData = new User();
  userDataSubscription: any;
  wishListCount$: any;
  

  constructor(
    
    private router: Router,
    private authService: AuthenticationService,
    private subscriptionService: SubscriptionService,
    private wishlistService: WishlistService
    
   ) {

    this.userId = localStorage.getItem('userId');
    this.wishlistService.getWishlistItems(this.userId).subscribe();
    
  }
ngOnInit() {
  this.userDataSubscription = this.subscriptionService.userData.asObservable().subscribe(data => {
    this.userData = data;
  });

  this.wishListCount$ = this.subscriptionService.wishlistItemcount$;
}  
ngOnDestroy() {
  if (this.userDataSubscription) {
    this.userDataSubscription.unsubscribe();
  }
}
logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}

