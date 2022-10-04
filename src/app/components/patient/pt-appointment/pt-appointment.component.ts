import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-appointment',
  templateUrl: './pt-appointment.component.html',
  styleUrls: ['./pt-appointment.component.css']
})
export class PtAppointmentComponent implements OnInit {

  doc_id: number = 0
  doctor: any;
  today: Date = new Date();
  dateDisplay: boolean = false;
  paymetDisplay: boolean = false;
  response: any;
  timeSlots: any[] = [];
  dateInput: any;
  timeInput: any;
  doctorFee: number = 0;

  constructor(private route: ActivatedRoute, private service: PatientService) { }

  ngOnInit(): void {
    this.route.params.subscribe(obj => {
      this.doc_id = obj['id'];
    })

    this.service.getDoctor(this.doc_id).subscribe(data => {
      this.doctor = data;
      this.doctorFee = this.doctor.charge;
    })

  }

  getTime(date: string) {
    this.service.getTimes(this.doc_id, date).subscribe(data => {
      this.timeSlots = []
      this.response = data
      this.response = this.response.slots

      // Converting object into array
      Object.entries(this.response).forEach(([, value]) => {
        this.timeSlots.push(value)
      });
      this.dateDisplay = true
    })
  }

  makePayment(date: string){
    this.dateInput = new Date(date);
    this.dateDisplay = false;
    this.paymetDisplay = true;
  }

}
