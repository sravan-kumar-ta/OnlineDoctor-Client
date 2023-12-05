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
  heading: string = 'Active';

  constructor(private service: DoctorService) { }

  ngOnInit(): void {
    this.getActiveApps();
  }

  getUpcomingApps() {
    this.service.upcomingAppointments().subscribe(data => {
      this.appointments = null;
      this.chat = false;
      this.heading = 'Upcoming';
      this.appointments = data;
    })
  }

  getActiveApps() {
    this.service.activeAppointments().subscribe(data => {
      this.appointments = null;
      this.chat = true;
      this.heading = 'Active';
      this.appointments = data;
    })
  }

  getCompletedApps() {
    this.service.completedAppointments().subscribe(data => {
      this.appointments = null;
      this.chat = false;
      this.heading = 'Completed';
      this.appointments = data;
    })
  }
}
