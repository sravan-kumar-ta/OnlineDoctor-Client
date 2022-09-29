import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService) { }

  canActivate() {
    if(this.service.isLoggedIn()) {
      return true;
    } else {
      this.service.logout();
      return false;
    }
  }
  
}
