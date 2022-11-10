import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { DrNavbarComponent } from '../dr-navbar/dr-navbar.component';

@Component({
  selector: 'app-dr-detailsadd',
  templateUrl: './dr-detailsadd.component.html',
  styleUrls: ['./dr-detailsadd.component.css']
})
export class DrDetailsaddComponent implements OnInit {

  specialities: any;

  detailsForm = new FormGroup({
    specialized_in_id: new FormControl(''),
    charge: new FormControl(''),
    paypal_account: new FormControl(''),
    sun_start: new FormControl(''),
    sun_end: new FormControl(''),
    mon_start: new FormControl(''),
    mon_end: new FormControl(''),
    tue_start: new FormControl(''),
    tue_end: new FormControl(''),
    wed_start: new FormControl(''),
    wed_end: new FormControl(''),
    thu_start: new FormControl(''),
    thu_end: new FormControl(''),
    fri_start: new FormControl(''),
    fri_end: new FormControl(''),
    sat_start: new FormControl(''),
    sat_end: new FormControl('')
  })

  constructor(private service: DoctorService, private router: Router, private navbar: DrNavbarComponent) { }

  ngOnInit(): void {
    this.service.getSpecialities().subscribe(data => {
      this.specialities = data;
    })
  }

  addDoctor() {
    this.service.addDoctor(this.detailsForm.value).subscribe(data => {
        this.navbar.doctor = data;
        this.router.navigate(['doctor/profile'])
      },
      error => {
        let errordata = error.error;
        for(var err in errordata) {
          alert(errordata[err][0])
        }
      }
    )
  }

}
