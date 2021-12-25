import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {
  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {

    const headerToken = localStorage.getItem('authToken');

    if (headerToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${headerToken}`
        }
      });
    }
    return newRequest.handle(request);
  }
}

