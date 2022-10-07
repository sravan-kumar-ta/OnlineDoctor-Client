import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  domain: string = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  getDoctor() {
    let url = `${this.domain}/doctor/`
    return this.http.get(url)
  }

  getSpecialities() {
    let url = `${this.domain}/specialities/`
    return this.http.get(url)
  }
  
  updateDoctor(data: any) {
    let url =  `${this.domain}/doctor/`
    return this.http.put(url, data, { observe: 'response' });
  }

  addDoctor(data: any) {
    let url =  `${this.domain}/doctor/`
    return this.http.post(url, data);
  }
}
