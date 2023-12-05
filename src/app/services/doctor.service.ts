import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GloballVar } from './globallVariable';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private globall: GloballVar) { }
  
  domain: string = this.globall.domain;

  getDoctor() {
    let url = `${this.domain}/doctor/doctor/`
    return this.http.get(url)
  }

  getSpecialities() {
    let url = `${this.domain}/doctor/specialities/`
    return this.http.get(url)
  }

  updateDoctor(data: any) {
    let url = `${this.domain}/doctor/doctor/`
    return this.http.put(url, data, { observe: 'response' });
  }

  addDoctor(data: any) {
    let url = `${this.domain}/doctor/doctor/`
    return this.http.post(url, data);
  }

  // Appointments
  // Currently not taken
  upcomingAppointments() {
    let url = `${this.domain}/doctor/filter-appointment/?status=upcoming`
    return this.http.get(url);
  }

  // Currently not taken
  activeAppointments() {
    let url = `${this.domain}/doctor/filter-appointment/?status=active`
    return this.http.get(url);
  }

  // Currently not taken
  completedAppointments() {
    let url = `${this.domain}/doctor/filter-appointment/?status=completed`
    return this.http.get(url);
  }
}
