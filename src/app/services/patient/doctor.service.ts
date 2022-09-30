import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }
  
  getSpecialities() {
    let url = `${this.domain}/specialities/`
    return this.http.get(url);
  }
  
  doctorsList(id: number) {
    let url = `${this.domain}/doctors/${id}/`
    return this.http.get(url);
  }

  getFamilyMembers() {
    let url = `${this.domain}/family_members/`
    return this.http.get(url);
  }

  updateUser(data: any){
    let url = `${this.domain}/user/`
    return this.http.patch(url, data, { observe: 'response' });
  }

  addMember(data: any){
    let url = `${this.domain}/family_members/`
    return this.http.post(url, data, { observe: 'response' });
  }

  getFamilyMember(id: number){
    let url = `${this.domain}/family_members/${id}/`
    return this.http.get(url);
  }

  updateFamilyMember(data: any, id: number){
    let url = `${this.domain}/family_members/${id}/`
    return this.http.put(url, data, { observe: 'response' });
  }

  deleteFamilyMember(id: number){
    let url = `${this.domain}/family_members/${id}/`
    return this.http.delete(url);
  }

}
  