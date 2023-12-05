import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GloballVar } from './globallVariable';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient, private globall: GloballVar) { }

  domain: string = this.globall.domain;

  getSpecialities() {
    let url = `${this.domain}/doctor/specialities/`
    return this.http.get(url);
  }

  doctorsList(id: number) {
    let url = `${this.domain}/patient/doctors/${id}/`
    return this.http.get(url);
  }
  
  getDoctor(id: number){
    let url = `${this.domain}/patient/doctor/${id}/`
    return this.http.get(url);
  }

  getTimes(id: number, date: string){
    let url = `${this.domain}/patient/times/${id}/${date}/`
    return this.http.get(url);
  }

  createAppointment(doc_id: number, date: string, time: string) {
    let url = `${this.domain}/patient/create-appointment/`
    let body = {
      'doctor': doc_id,
      'date': date,
      'time': time,
    }
    return this.http.post(url, body)
  }
  
  getCompletedApps(){
    let url = `${this.domain}/patient/filter-appointment/?status=completed`
    return this.http.get(url)
  }
  
  getActiveApps(){
    let url = `${this.domain}/patient/filter-appointment/?status=active`
    return this.http.get(url)
  }
  
  getUpcomingApps(){
    let url = `${this.domain}/patient/filter-appointment/?status=upcoming`
    return this.http.get(url)
  }
}
