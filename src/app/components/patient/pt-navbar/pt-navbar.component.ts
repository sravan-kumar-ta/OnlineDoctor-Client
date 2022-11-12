import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pt-navbar',
  templateUrl: './pt-navbar.component.html',
  styleUrls: ['./pt-navbar.component.css']
})
export class PtNavbarComponent implements OnInit {

  user: any;

  constructor(private service:AuthService, private authService: SocialAuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.getUser().subscribe(data => {
        this.user = data;
      });
    }, 2500);
  }

  logout() {
    this.service.logout();
    this.authService.signOut();
  }

}
