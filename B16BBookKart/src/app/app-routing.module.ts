import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from 'src/app/myorders/myorders.component';
import { AuthGuard } from './auth.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'myorders', component: MyordersComponent, canActivate: [AuthGuard] },
  { path: 'books/details/:id', component: BookDetailsComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
