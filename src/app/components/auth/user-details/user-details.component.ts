import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userData: any;

  userForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    gender: new FormControl('choice', Validators.required),
    role: new FormControl('patient', Validators.required),
  })

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  updateUser(){
    console.log(this.userForm.value);
    this.service.updateUser(this.userForm.value).subscribe(success => {
      this.userData = success;
      if (this.userData.body.role == 'patient') {
        this.router.navigate(['/patient/home/'])
      } else if (this.userData.body.role == 'doctor') {
        this.router.navigate(['/doctor/profile/'])
      } else {
        this.service.logout()
      }
    })
  }

}
