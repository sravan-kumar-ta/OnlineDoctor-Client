import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GloballVar } from './globallVariable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // domain: string = 'http://127.0.0.1:8000'
  // domain: string = 'https://online-doctor-x.herokuapp.com/api'
  domain: string = this.globall.domain
  url: string = ''  
  options: any = {
    method: 'GET',
    body: '',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  constructor(private router: Router, private http: HttpClient, private globall: GloballVar) { }

  login(data: any) {
    this.url = `${this.domain}/user/login/`
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
    let url = `${this.domain}/user/user/`;
    return this.http.get(url);
  }
  
  // Currently not taken
  getUserById(id:number) {
    let url = `${this.domain}/user_by_id/${id}/`;
    return this.http.get(url);
  }

  updateUser(data: any) {
    let url = `${this.domain}/user/user/`
    return this.http.patch(url, data, { observe: 'response' });
  }
  
  getAccessToken() {
    return localStorage.getItem('access_token') || '';
  }

  getRefreshToken() {
    return localStorage.getItem("refresh_token") || '';
  }

  generateRefreshToken() {
    let url = `${this.domain}/user/token/refresh/`
    let body = {
      "refresh": this.getRefreshToken()
    }
    return this.http.post(url, body);
  }

  saveTokens(tokens: any) {
    localStorage.setItem('access_token', tokens.access);
    localStorage.setItem('refresh_token', tokens.refresh);
  }

  changePassword(data: any) {
    let url = `${this.domain}/user/change-password/`;
    // let local_option = this.options;
    // local_option.method = 'POST';
    let body = {
      "new_password": data.newPassword,
      "old_password": data.oldPassword,
    };
    // local_option.body = JSON.stringify(body);
    // console.warn(local_option.body)
    
    return this.http.post(url, body);
  }

  logout() {
    alert('Your session expired');
    localStorage.clear();
    this.router.navigate(['']);
  }

  // Currently not taken
  googleAuth(token: string){
    let url = `${this.domain}/google/`;
    return this.http.post(url, {'auth_token': token})
  }

  // Currently not taken
  getPasswordResetToken(data: any) {
    let url = `${this.domain}/password_reset/`;
    return this.http.post(url, data)
  }

  // Currently not taken
  resetPassword(data: any){
    let url = `${this.domain}/password_reset/confirm/`;
    return this.http.post(url, data)
  }


}
