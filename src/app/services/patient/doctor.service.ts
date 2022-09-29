import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

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

  getSpecialities() {
    this.url = `${this.domain}/specialities/`
    let token = localStorage.getItem('access_token');
    let options: any = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': "Bearer " + token
      }
    }

    return fetch(this.url, options)
  }

  doctorsList(id: number) {
    this.url = `${this.domain}/doctors/${id}/`
    let token = localStorage.getItem('token');
    let options: any = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': "Bearer " + token
      }
    }

    return fetch(this.url, options)
  }
}
  