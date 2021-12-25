import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyordersComponent } from './myorders/myorders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {COMPILER_OPTIONS} from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MyordersComponent,
    BookDetailsComponent,
    LoginComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMaterialModule
   
  ],
 
  providers: [{provide: COMPILER_OPTIONS, useValue: {}, multi: true},
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
