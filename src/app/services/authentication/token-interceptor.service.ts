import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let mod_request = this.AddTokenheader(request, this.service.getAccessToken());

    return next.handle(mod_request).pipe(catchError(errordata => {
      if (errordata.status === 401) {
        return this.handleRefrehToken(request, next);
      }
      return throwError(errordata);
    })
    );

  }

  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
    return this.service.generateRefreshToken().pipe(switchMap((data: any) => {
      this.service.saveTokens(data);
      return next.handle(this.AddTokenheader(request, data.access))
    }),
      catchError(errodata => {
        this.service.logout();
        return throwError(errodata)
      })
    );
  }

  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ setHeaders: { Authorization: "Bearer " + token } });
  }

}