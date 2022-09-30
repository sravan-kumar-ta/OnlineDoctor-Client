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

  memberForm: any = new FormGroup({
    relation: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  })

  constructor(private service: AuthService, private ptService: DoctorService) { }

  ngOnInit(): void {
    this.service.getUser().subscribe(data => {
      this.user = data;
      this.ptService.getFamilyMembers().subscribe(data => {
        this.members = data;
      })
    });
    
  }

  addMembers() {
    console.log(this.memberForm.value);
    this.ptService.addMember(this.memberForm.value).subscribe(success => {
      alert("Successfully added a member");
      this.ptService.getFamilyMembers().subscribe(data => {
        this.members = data;
      })
    }), (error: { statusText: any; }) => {
      alert(error.statusText);
    }
  }

}
