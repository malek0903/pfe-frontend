import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {KeycloakService} from 'keycloak-angular'
@Injectable({
  providedIn: 'root'
})
export class KeycloakHttpInterceptorService implements HttpInterceptor {
    getToken :String
  constructor(private kcService : KeycloakService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.kcService.getToken().then((token)=>{
    this.getToken = token
    });
    if(!this.kcService.isLoggedIn()) 
      return next.handle(req);
    let request = req.clone({
      setHeaders: {
        Authorization : "Bearer " + this.getToken
      }
    })
  return next.handle(request);  
  }
}
