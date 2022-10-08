import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  user: any;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.service.getUser().subscribe(data => {
      this.user = data;
      if (this.user.role == 'patient') {
        this.router.navigate(['/patient/home/'])
      } else if (this.user.role == 'doctor') {
        this.router.navigate(['/doctor/profile/'])
      } else {
        this.service.logout();
      }
    })
  }

}
