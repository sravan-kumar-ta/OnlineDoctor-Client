import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { DoctorService } from 'src/app/services/patient/doctor.service';

@Component({
  selector: 'app-pt-profile',
  templateUrl: './pt-profile.component.html',
  styleUrls: ['./pt-profile.component.css']
})
export class PtProfileComponent implements OnInit {

  user: any;
  members: any;

  constructor(private service: AuthService, private ptService: DoctorService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
      this.user = data;
      this.ptService.getFamilyMembers().subscribe(data => {
        this.members = data;
      })
    });
    
  }

}
