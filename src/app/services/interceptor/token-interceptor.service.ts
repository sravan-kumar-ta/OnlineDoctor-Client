import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, switchMap, finalize } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoaderService } from '../loader.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service: AuthService, private loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request)
    let mod_request = request
    this.loaderService.show();

    if (request.url.match("/user/google/") || request.url.match("/password_reset/")) {
      return next.handle(request).pipe(finalize(() => {this.loaderService.hide();}))
    } else {
      mod_request = this.AddTokenheader(request, this.service.getAccessToken());
    }

    return next.handle(mod_request).pipe(catchError(errordata => {
      if (errordata.status === 401) {
        return this.handleRefrehToken(request, next);
      }
      return throwError(errordata);
    }), finalize(() => {this.loaderService.hide();})
    );

  }

  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
    return this.service.generateRefreshToken().pipe(switchMap((data: any) => {
      this.service.saveTokens(data);
      console.log('token refreshing...')
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