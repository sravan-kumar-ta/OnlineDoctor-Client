import { Injectable } from '@angular/core';

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

  constructor() { }

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
    this.url = `${this.domain}/user/`;
    let token = localStorage.getItem('token');
    let options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': "Bearer " + token
      }
    }

    return fetch(this.url, options)
  }
}
