import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-update-member',
  templateUrl: './pt-update-member.component.html',
  styleUrls: ['./pt-update-member.component.css']
})
export class PtUpdateMemberComponent implements OnInit {

  id: number = 0
  member: any
  memberForm: any = new FormGroup({
    relation: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  })

  constructor(private route:ActivatedRoute, private service: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(obj => {
      this.id = obj['id'];
    })
    this.service.getFamilyMember(this.id).subscribe(data => {
      this.member = data;
      this.memberForm = new FormGroup({
        relation: new FormControl(this.member['relation'], Validators.required),
        name: new FormControl(this.member['name'], Validators.required),
        age: new FormControl(this.member['age'], Validators.required),
      })
    })
  }

  updateMember(){
    console.log(this.memberForm.value);
    this.service.updateFamilyMember(this.memberForm.value, this.id).subscribe(success => {
      this.router.navigate(['patient/profile/'])
    }), (error: { statusText: any; }) => {
      alert(error.statusText);
    }
  }

  deleteMember(id: number){
    this.service.deleteFamilyMember(id).subscribe(data => {
      alert("Deleted")
    });
    this.router.navigate(['patient/profile/'])
  }

}
