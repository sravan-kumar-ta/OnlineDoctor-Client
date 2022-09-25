import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain: string = 'http://127.0.0.1:8000/api'
  url: string = ''
  options: any = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  constructor() { }

  getToken(data: any) {
    this.url = `${this.domain}/token/`
    this.options.method = 'POST'
    this.options.body = JSON.stringify(data)

    return fetch(this.url, this.options)
  }

  register(data: any) {
    this.url = `${this.domain}/user/register/`
    this.options.method = 'POST'
    this.options.body = JSON.stringify(data)

    return fetch(this.url, this.options)
  }
}
