import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-dr-navbar',
  templateUrl: './dr-navbar.component.html',
  styleUrls: ['./dr-navbar.component.css']
})
export class DrNavbarComponent implements OnInit {

  user: any;
  doctor: any;
  fm: any;

  constructor(private service: AuthService, private drService: DoctorService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.getUser().subscribe(data => {
        this.user = data;
        this.drService.getDoctor().subscribe(data => {
          this.doctor = data;
        })
      });
    }, 1000);
  }

  logout() {
    this.service.logout();
  }

}
