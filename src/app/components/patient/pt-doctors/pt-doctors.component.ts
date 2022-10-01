import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-doctors',
  templateUrl: './pt-doctors.component.html',
  styleUrls: ['./pt-doctors.component.css']
})
export class PtDoctorsComponent implements OnInit {

  id: number = 0;
  doctors: any;

  constructor(private router: ActivatedRoute, private service: PatientService) {
    this.router.params.subscribe(obj => this.id = obj['id'])
  }

  ngOnInit(): void {
    this.service.doctorsList(this.id).subscribe(data => {
      this.doctors = data;
    })
  }

}
