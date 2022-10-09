import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-dr-appointments',
  templateUrl: './dr-appointments.component.html',
  styleUrls: ['./dr-appointments.component.css']
})
export class DrAppointmentsComponent implements OnInit {

  appointments: any;
  chat: boolean = false;

  constructor(private service: DoctorService) { }

  ngOnInit(): void {
    this.getUpcomingApps();
  }

  getUpcomingApps() {
    this.service.upcomingAppointments().subscribe(data => {
      this.appointments = null;
      this.chat = false;
      this.appointments = data;
    })
  }

  getActiveApps() {
    this.service.activeAppointments().subscribe(data => {
      this.appointments = null;
      this.chat = true;
      this.appointments = data;
    })
  }

  getCompletedApps() {
    this.service.completedAppointments().subscribe(data => {
      this.appointments = null;
      this.chat = false;
      this.appointments = data;
    })
  }

}
