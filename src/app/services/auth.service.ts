import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GloballVar } from './globallVariable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient, private globall: GloballVar) { }
  
  domain: string = this.globall.domain;

  login(data: any) {
    const url = `${this.domain}/user/login/`
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }
    
    return fetch(url, options)
  }

  register(data: any) {
    const url = `${this.domain}/user/register/`
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }

    return fetch(url, options)
  }
  
  getUser() {
    let url = `${this.domain}/user/user/`;
    return this.http.get(url);
  }
  
  getUserById(id:number) {
    let url = `${this.domain}/user/user_by_id/${id}/`;
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
    let body = {
      "new_password": data.newPassword,
      "old_password": data.oldPassword,
    };
    
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
