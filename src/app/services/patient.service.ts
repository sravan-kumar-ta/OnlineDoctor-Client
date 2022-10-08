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

  addMember(data: any) {
    let url = `${this.domain}/family_members/`
    return this.http.post(url, data, { observe: 'response' });
  }

  getFamilyMembers() {
    let url = `${this.domain}/family_members/`
    return this.http.get(url);
  }

  getFamilyMember(id: number) {
    let url = `${this.domain}/family_members/${id}/`
    return this.http.get(url);
  }

  updateFamilyMember(data: any, id: number) {
    let url = `${this.domain}/family_members/${id}/`
    return this.http.put(url, data, { observe: 'response' });
  }

  deleteFamilyMember(id: number) {
    let url = `${this.domain}/family_members/${id}/`
    return this.http.delete(url);
  }

  // Blogs

  getAllBlogs(pageNumber: number) {
    let url = `${this.domain}/posts/`
    return this.http.get(url, {params:{page:pageNumber}});
  }

  getPost(id: number){
    let url = `${this.domain}/posts/${id}/`
    return this.http.get(url);
  }

  getLike(id: number){
    let url = `${this.domain}/posts/${id}/liked_or_not/`
    return this.http.get(url);
  }

  doLikeOrDislike(id: number){
    let url = `${this.domain}/posts/${id}/like_or_dislike/`
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
