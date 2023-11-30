import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let access_token = localStorage.getItem('access_token');
    let request = req;

    if (access_token) {
      request = req.clone({
        setHeaders: { Authorization: `Bearer ${access_token}` },
      });

      return next.handle(request);
    }

    return next.handle(request);
  }
}
