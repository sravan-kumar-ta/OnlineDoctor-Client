import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-home',
  templateUrl: './pt-home.component.html',
  styleUrls: ['./pt-home.component.css']
})
export class PtHomeComponent implements OnInit {

  allCategories:any = []

  constructor(private services: PatientService) { }

  ngOnInit(): void {
    this.services.getSpecialities().subscribe(data => {
      this.allCategories = data;
    })
  }

}
