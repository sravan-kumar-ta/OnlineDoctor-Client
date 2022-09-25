import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'first_name': new FormControl('', Validators.required),
    'last_name': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'role': new FormControl('', Validators.required),
    'gender': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required),
    'password2': new FormControl('', Validators.required),
  })

  error_message: any = ``

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.error_message = ``;
    let data = this.registerForm.value;
    this.service.register(data).then(res => {
      if (res.ok) {
        res.json().then(data => console.log(data));
      } else {
        res.json().then(data => {
          for (const key in data) {
            this.error_message += `${key}: ${data[key]}\n\n`;
            console.log(`${key}: ${data[key]}`);
            this.registerForm.get(key)?.setErrors({'invalid': true})
          }
        });
      }
    })
  }

}
