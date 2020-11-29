import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private _router: Router,     private alertService: AlertService, ) { 
      
  }

  redirectTo(uri:string){
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this._router.navigate([uri]));
 }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token = localStorage.getItem("token");

      if (token) {
          request = request.clone({
              setHeaders: {
                  Authorization: 'Bearer ' + token
              }
          });
      }   

      
  
      return next.handle(request).pipe(
          catchError(err => {
              if (err.status === 400) {
                this.alertService.warning('Er ging iets fout!');
                  this.redirectTo('/login');
              }
              return throwError("unauthorized");
          })
      );
  }
}
