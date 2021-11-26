import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from 'src/app/myorders/myorders.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'myorders', component: MyordersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
