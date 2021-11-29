import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopingCartComponent } from './shopingcart/shopingcart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  { path: '', component: WishlistComponent, pathMatch: 'full' },
 
  {path:'shopping_cart',component: ShopingCartComponent},
  {path:'favorite',component: WishlistComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShopingCartComponent, WishlistComponent]