import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyordersComponent } from './myorders/myorders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule}from '@angular/material/toolbar'
import {MatButtonModule}from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import {COMPILER_OPTIONS} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    MyordersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatMenuModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    
   
  ],
 
  providers: [{provide: COMPILER_OPTIONS, useValue: {}, multi: true},
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
