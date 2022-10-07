import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-dr-profile',
  templateUrl: './dr-profile.component.html',
  styleUrls: ['./dr-profile.component.css']
})
export class DrProfileComponent implements OnInit {

  user: any;
  doctor: any;
  form: any;
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

  constructor(private service: AuthService, private drService: DoctorService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
      this.user = data;
      this.drService.getDoctor().subscribe(data => {
        this.doctor = data;
        this.drService.getSpecialities().subscribe(data => {
          this.specialities = data;
          
          // set default values to the details form
          this.detailsForm = new FormGroup({
            specialized_in_id: new FormControl(this.doctor.specialized_in.id),
            charge: new FormControl(this.doctor.charge),
            paypal_account: new FormControl(this.doctor.paypal_account),
            sun_start: new FormControl(this.doctor.sun_start),
            sun_end: new FormControl(this.doctor.sun_end),
            mon_start: new FormControl(this.doctor.mon_start),
            mon_end: new FormControl(this.doctor.mon_end),
            tue_start: new FormControl(this.doctor.tue_start),
            tue_end: new FormControl(this.doctor.tue_end),
            wed_start: new FormControl(this.doctor.wed_start),
            wed_end: new FormControl(this.doctor.wed_end),
            thu_start: new FormControl(this.doctor.thu_start),
            thu_end: new FormControl(this.doctor.thu_end),
            fri_start: new FormControl(this.doctor.fri_start),
            fri_end: new FormControl(this.doctor.fri_end),
            sat_start: new FormControl(this.doctor.sat_start),
            sat_end: new FormControl(this.doctor.sat_end),
          })
          
        })
      })
    });
  }

  updateDoctor() {
    this.drService.updateDoctor(this.detailsForm.value).subscribe(response => {
      alert('Updated')
      this.doctor = response.body;
    }), (error: { statusText: any; }) => {
      alert(error.statusText);
    }
  }

}
