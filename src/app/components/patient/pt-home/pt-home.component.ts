import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/patient/doctor.service';

@Component({
  selector: 'app-pt-home',
  templateUrl: './pt-home.component.html',
  styleUrls: ['./pt-home.component.css']
})
export class PtHomeComponent implements OnInit {

  allCategories:any = []

  constructor(private services: DoctorService) { }

  ngOnInit(): void {
    this.services.getSpecialities().then(res => res.json()).then(data => {
      console.log(data)
      this.allCategories = data;
    });
  }

}
