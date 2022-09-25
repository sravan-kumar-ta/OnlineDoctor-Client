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

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    this.error_message = '';

    let data = this.loginForm.value;
    this.service.getToken(data).then(res => {
      if (res.ok) {
        res.json().then(data => localStorage.setItem('token', data.token));
      } else {
        res.json().then(data => this.error_message = data.detail);
      }
    })
  }

}
