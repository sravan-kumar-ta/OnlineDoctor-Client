import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-update-user',
  templateUrl: './pt-update-user.component.html',
  styleUrls: ['./pt-update-user.component.css']
})
export class PtUpdateUserComponent implements OnInit {

  user: any;
  errorMessage: any
  emailError: string = ''
  usernameError: string = ''

  userForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  })

  constructor(private service: AuthService, private ptService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
      this.user = data;
      this.userForm = new FormGroup({
        first_name: new FormControl(this.user['first_name'], Validators.required),
        last_name: new FormControl(this.user['last_name'], Validators.required),
        username: new FormControl(this.user['username'], Validators.required),
        email: new FormControl(this.user['email'], Validators.required),
        gender: new FormControl(this.user['gender'], Validators.required),
      })
    });
  }

  updateUser() {
    this.service.updateUser(this.userForm.value).subscribe(success => {
      this.router.navigate(['patient/profile/'])
    }, error => {
      this.errorMessage = error.error.error_message
      if ('email' in this.errorMessage) {
        console.log(error.error.error_message.email)
        this.emailError = error.error.error_message.email
      }
      if ('username' in this.errorMessage) {
        this.usernameError = error.error.error_message.username
      }
      alert(error.statusText);
    });

  }

}
