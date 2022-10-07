import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

import { SocialAuthService } from '@abacritt/angularx-social-login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
  })

  error_message: string = ''
  role: string = ''
  token: string = ''
  success_data: any;
  user: any;

  constructor(
    private service: AuthService,
    private router: Router,
    private authService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      console.log('ID Token:', user.idToken)
      this.service.googleAuth(user.idToken).subscribe(success => {
        this.success_data = success;
        localStorage.clear();
        this.service.saveTokens(this.success_data.tokens);
        this.service.getUser().subscribe(data => {
          this.user = data;
          if (this.user.role == 'patient') {
            this.router.navigate(['/patient/home/'])
          } else if (this.user.role == 'doctor') {
            this.router.navigate(['/doctor/profile/'])
          }
        })

      }, error => {
        console.log(error.error.error_message)
        this.error_message = error.error.error_message;
      });
    })
  }

  authenticate() {
    this.error_message = '';

    let data = this.loginForm.value;
    this.service.login(data).then(res => {
      if (res.ok) {
        res.json().then(data => {
          localStorage.clear();
          localStorage.setItem('access_token', data.tokens.access);
          localStorage.setItem('refresh_token', data.tokens.refresh);
          if (data.role == 'patient') {
            this.router.navigate(['/patient/home/'])
          } else if (data.role == 'doctor') {
            this.router.navigate(['/doctor/profile/'])
          } else {
            alert("There are a few steps to complete your registration.");
            this.router.navigate(['/new-user/'])
          }
        });
      } else {
        res.json().then(data => this.error_message = data.detail);
      }
    });

  }

}
