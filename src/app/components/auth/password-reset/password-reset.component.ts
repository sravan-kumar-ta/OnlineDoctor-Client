import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  inputMail: any;
  input: boolean = false;
  intruction: boolean = false;
  newPasswordBox: boolean = false;
  password: any;
  pwdMatch: boolean = false;
  pwdNotMatch: boolean = false;
  token: any;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.input = true;
  }

  sendMail(){
    if(this.inputMail != null){
      let data = {
        'email': this.inputMail
      }
      this.input = false;
      this.intruction = true;
      this.service.getPasswordResetToken(data).subscribe();
    } else {
      alert('please enter email')
    }
  }

  openPasswordBox() {
    this.intruction = false;
    this.newPasswordBox = true;
  }

  passwordValidation(event: any) {
    if(this.password != event.target.value) {
      this.pwdNotMatch = true;
    }
  }

  pwdValidation(event: any) {
    if(this.password == event.target.value) {
      this.pwdNotMatch = false;
      this.pwdMatch = true;
    } else {
      this.pwdMatch = false;
    }
  }

  Submit() {
    if((this.password != null) && (this.token != null)) {
      const data = {
        'password': this.password,
        'token': this.token
      }
      this.service.resetPassword(data).subscribe(data => {
        alert('password changed')
        this.router.navigate([''])
      })
    } else {
      alert('all fields are required')
    }
  }

}
