import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // domain: string = 'http://127.0.0.1:8000/api'
  domain: string = 'https://online-doctor-x.herokuapp.com/api'
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
    console.log(data)
    this.url = `${this.domain}/login/`
    this.options.method = 'POST'
    this.options.body = JSON.stringify(data)

    return fetch(this.url, this.options)
  }

  register(data: any) {
    this.url = `${this.domain}/user/register/`
    this.options.method = 'POST'
    let local_option = this.options
    local_option.body = JSON.stringify(data)

    return fetch(this.url, local_option)
  }
  
  getUser() {
    let url = `${this.domain}/user/`;
    return this.http.get(url);
  }
  
  getUserById(id:number) {
    let url = `${this.domain}/user_by_id/${id}/`;
    return this.http.get(url);
  }

  updateUser(data: any) {
    let url = `${this.domain}/user/`
    return this.http.patch(url, data, { observe: 'response' });
  }
  
  getAccessToken() {
    return localStorage.getItem('access_token') || '';
  }

  getRefreshToken() {
    return localStorage.getItem("refresh_token") || '';
  }

  generateRefreshToken() {
    // let url = 'http://127.0.0.1:8000/api/token/refresh/'
    let url = 'https://srvn-s3.herokuapp.com/api/token/refresh/'
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

  googleAuth(token: string){
    let url = `${this.domain}/google/`;
    return this.http.post(url, {'auth_token': token})
  }

  getPasswordResetToken(data: any) {
    let url = `${this.domain}/password_reset/`;
    return this.http.post(url, data)
  }

  resetPassword(data: any){
    let url = `${this.domain}/password_reset/confirm/`;
    return this.http.post(url, data)
  }


}
