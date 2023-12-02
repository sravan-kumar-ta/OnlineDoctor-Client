import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-profile',
  templateUrl: './pt-profile.component.html',
  styleUrls: ['./pt-profile.component.css']
})
export class PtProfileComponent implements OnInit {

  user: any;
  passwordForm = false;
  
  passwordChangeForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  })

  constructor(private service: AuthService, private ptService: PatientService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
      this.user = data;
    });
    
  }

  toggleForm() {
    this.passwordChangeForm.reset();
    this.passwordForm = !this.passwordForm;
  }
  
  onSubmit() {
    console.log(this.passwordChangeForm.value.confirmPassword);
    let oldPassword = this.passwordChangeForm.value.oldPassword;
    let newPassword = this.passwordChangeForm.value.newPassword;
    let confirmPassword = this.passwordChangeForm.value.confirmPassword;
    if(newPassword != confirmPassword) {
      alert("Password Mismatch..!")
    } else {
      this.service.changePassword(this.passwordChangeForm.value).subscribe(success => {
        alert("Password Changed");
        this.toggleForm();
      }, error => {
        alert(error.error.detail);
      })
    }
    
  }
  

}
