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
    specialized_in: new FormControl(''),
    charge: new FormControl(''),
    paypal_account: new FormControl(''),
    sun_start: new FormControl('00:00:00'),
    sun_end: new FormControl('00:00:00'),
    mon_start: new FormControl('00:00:00'),
    mon_end: new FormControl('00:00:00'),
    tue_start: new FormControl('00:00:00'),
    tue_end: new FormControl('00:00:00'),
    wed_start: new FormControl('00:00:00'),
    wed_end: new FormControl('00:00:00'),
    thu_start: new FormControl('00:00:00'),
    thu_end: new FormControl('00:00:00'),
    fri_start: new FormControl('00:00:00'),
    fri_end: new FormControl('00:00:00'),
    sat_start: new FormControl('00:00:00'),
    sat_end: new FormControl('00:00:00')
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
          alert(errordata[err]);
        }
        // this.router.navigate(['doctor/profile']);
      }
    )
  }

}
