import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain: string = 'http://127.0.0.1:8000/api'
  url: string = ''  
  options: any = {
    method: 'GET',
    body: '',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  constructor(private router: Router, private http: HttpClient) { }

  login(data: any) {
    this.url = `${this.domain}/login/`
    this.options.method = 'POST'
    this.options.body = JSON.stringify(data)

    return fetch(this.url, this.options)
  }

  register(data: any) {
    this.url = `${this.domain}/user/register/`
    this.options.method = 'POST'
    let local_option = this.options
    local_option = JSON.stringify(data)

    return fetch(this.url, local_option)
  }
  
  getUser() {
    let url = `${this.domain}/user/`;
    return this.http.get(url);
  }

  isLoggedIn() {
    return localStorage.getItem('access_token') != null;
  }

  getAccessToken() {
    return localStorage.getItem('access_token') || '';
  }

  getRefreshToken() {
    return localStorage.getItem("refresh_token") || '';
  }

  generateRefreshToken() {
    let url = 'http://127.0.0.1:8000/api/token/refresh/'
    let body = {
      "refresh": this.getRefreshToken()
    }
    return this.http.post(url, body);
  }

  saveTokens(tokens: any) {
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);
  }

  logout() {
    alert('Your session expired');
    localStorage.clear();
    this.router.navigate(['']);
  }
}
