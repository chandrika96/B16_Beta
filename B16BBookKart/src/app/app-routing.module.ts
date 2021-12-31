import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from 'src/app/myorders/myorders.component';
import { AuthGuard } from './auth.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'myorders', component: MyordersComponent, canActivate: [AuthGuard] },
  { path: 'books/details/:id', component: BookDetailsComponent },
{path:'book-details',component:BookDetailsComponent},
{path:'nav-bar',component:NavBarComponent}]

@NgModule({
  imports: [ CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
