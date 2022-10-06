import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { render } from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-pt-appointment',
  templateUrl: './pt-appointment.component.html',
  styleUrls: ['./pt-appointment.component.css']
})
export class PtAppointmentComponent implements OnInit {

  doc_id: number = 0;
  doctor: any;
  today: Date = new Date();
  dateDisplay: boolean = false;
  response: any;
  timeSlots: any[] = [];
  dateInput: any;
  timeInput: any;
  element: any;
  app_date: string = '';

  constructor(private route: ActivatedRoute, private service: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(obj => {
      this.doc_id = obj['id'];
    })

    this.service.getDoctor(this.doc_id).subscribe(data => {
      this.doctor = data;
    })

  }

  getTime(date: string) {
    console.log('calling');
    this.timeSlots = []
    this.app_date = date;
    this.service.getTimes(this.doc_id, date).subscribe(data => {
      this.response = data
      this.response = this.response.slots

      // Converting object into array
      Object.entries(this.response).forEach(([, value]) => {
        this.timeSlots.push(value)
      });
      this.dateDisplay = true;
      this.element = document.getElementById('paymentDIV')
      this.element.style.display = 'none';
    })
  }

  makePayment(date: string){
    this.element = document.getElementById('paymentDIV')
    this.dateInput = new Date(date);
    this.dateDisplay = false;
    this.element.style.display = 'block';

    if(document.getElementById('paypalButton')){
      document.getElementById('paypalButton')?.remove();
    }

    const paypal_btn: any = document.createElement('div');
    paypal_btn.setAttribute("id", "paypalButton");
    const paypal_box: any = document.getElementById('payapl-box');
    paypal_box?.appendChild(paypal_btn);

    render(
      {
        id: '#paypalButton',
        currency: 'USD',
        value: this.doctor?.charge,
        onApprove: (res) => {
          this.service.createAppointment(this.doc_id, this.app_date, this.timeInput).subscribe(() => {
            this.router.navigate(['patient/home']);
            alert("Appointment created")
          })
        },
      }
    )
  }

}
