import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {

  user: any;

  constructor(private service: AuthService, private router: Router) { }
  
  canActivate() {
    return this.service.getUser().pipe(map((res) => {
      this.user = res;
      if (this.user.role == 'doctor') {
        return true;
      }
      alert("You don't have permission to view this page...!")
      this.router.navigate(['**'])
      return false;
    }))
  }

}
