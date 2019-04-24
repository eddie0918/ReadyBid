import { Injectable } from '@angular/core';
import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TestService } from '../services/test.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private errorDialogService: ErrorDialogService,
    private testService: TestService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          // this.errorDialogService.openDialog(event);
          this.testService.requestList = { type: 'success', timestamp: Date.now(), request: request.body };
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        console.log(error);
        data = {
          reason: error.message,
          status: error.status
        };
        this.errorDialogService.openDialog(data);
        this.testService.requestList = { type: 'error', timestamp: Date.now(), request: request.body };
        return throwError(error);
      }));
  }
}