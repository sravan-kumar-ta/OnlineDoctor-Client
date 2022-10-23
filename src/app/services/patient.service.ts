import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  domain: string = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  getSpecialities() {
    let url = `${this.domain}/specialities/`
    return this.http.get(url);
  }

  doctorsList(id: number) {
    let url = `${this.domain}/doctors/${id}/`
    return this.http.get(url);
  }

  //create appointment
  getDoctor(id: number){
    let url = `${this.domain}/doctor/${id}/`
    return this.http.get(url);
  }

  getTimes(id: number, date: string){
    let url = `${this.domain}/times/${id}/${date}/`
    return this.http.get(url);
  }

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
  getCompletedApps(){
    let url = `${this.domain}/appointment/get_completed/`
    return this.http.get(url)
  }

  getActiveApps(){
    let url = `${this.domain}/appointment/get_active/`
    return this.http.get(url)
  }

  getUpcomingApps(){
    let url = `${this.domain}/appointment/get_upcoming/`
    return this.http.get(url)
  }

}
