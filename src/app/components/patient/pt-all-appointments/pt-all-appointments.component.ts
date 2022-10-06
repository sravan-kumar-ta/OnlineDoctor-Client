import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-all-appointments',
  templateUrl: './pt-all-appointments.component.html',
  styleUrls: ['./pt-all-appointments.component.css']
})
export class PtAllAppointmentsComponent implements OnInit {

  activeApps: any;
  completedApps: any;
  upcomingApps: any;

  constructor(private service: PatientService) { }

  ngOnInit(): void {
    this.service.getActiveApps().subscribe(data => {
      this.activeApps = data;
      this.service.getCompletedApps().subscribe(data => {
        this.completedApps = data;
        this.service.getUpcomingApps().subscribe(data => {
          this.upcomingApps = data;
        })
      })
    })
  }

}
