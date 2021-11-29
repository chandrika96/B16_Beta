import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId;
  

  constructor(
    private router: Router,
    
   ) {

    this.userId = localStorage.getItem('userId');
  }
ngOnInit() {

}
}
