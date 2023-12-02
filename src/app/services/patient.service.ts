import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GloballVar } from './globallVariable';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  // domain: string = 'http://127.0.0.1:8000/api'
  // domain: string = 'https://online-doctor-x.herokuapp.com/api'
  domain: string = this.globall.domain

  constructor(private http: HttpClient, private globall: GloballVar) { }

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

  // Currently not taken
  createAppointment(doc_id: number, date: string, time: string) {
    let url = `${this.domain}/appointment/`
    let body = {
      'doc_id': doc_id,
      'date': date,
      'time': time,
    }
    return this.http.post(url, body)
  }

  //get appointments
  // Currently not taken
  getCompletedApps(){
    let url = `${this.domain}/appointment/get_completed/`
    return this.http.get(url)
  }

  // Currently not taken
  getActiveApps(){
    let url = `${this.domain}/appointment/get_active/`
    return this.http.get(url)
  }

  // Currently not taken
  getUpcomingApps(){
    let url = `${this.domain}/appointment/get_upcoming/`
    return this.http.get(url)
  }

}
