import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  showSnackbar(arg0: string) {
    throw new Error('Method not implemented.');
  }
  //showSnackbar(message: string){

  //throw new Error('Method not implemented.');
  //}

  constructor(public snackbar: MatSnackBar) { }
  showSnackBar(message: string) {
    this.snackbar.open(message, 'close',{
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}

