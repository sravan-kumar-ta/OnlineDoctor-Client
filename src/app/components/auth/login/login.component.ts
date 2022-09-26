import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

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

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    this.error_message = '';

    let data = this.loginForm.value;
    this.service.login(data).then(res => {
      console.log(res)
      if (res.ok) {
        res.json().then(data => {
          localStorage.removeItem('token');
          localStorage.setItem('token', data.tokens.access);
          if(data.role == 'patient') {
            this.router.navigate(['home/'])
          }
        });
      } else {
        res.json().then(data => this.error_message = data.detail);
      }
    });

  }

}
