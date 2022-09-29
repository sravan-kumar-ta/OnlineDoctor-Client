import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/patient/doctor.service';

@Component({
  selector: 'app-pt-doctors',
  templateUrl: './pt-doctors.component.html',
  styleUrls: ['./pt-doctors.component.css']
})
export class PtDoctorsComponent implements OnInit {

  id: number = 0;
  doctors: any;

  constructor(private router: ActivatedRoute, private service: DoctorService) {
    this.router.params.subscribe(obj => this.id = obj['id'])
  }

  ngOnInit(): void {
    this.service.doctorsList2(this.id).subscribe(data => {
      this.doctors = data;
    })
  }

}
