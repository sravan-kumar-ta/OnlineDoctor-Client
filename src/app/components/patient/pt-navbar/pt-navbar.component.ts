import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-pt-navbar',
  templateUrl: './pt-navbar.component.html',
  styleUrls: ['./pt-navbar.component.css']
})
export class PtNavbarComponent implements OnInit {

  user: any;

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getUser().then(res => res.json()).then(data => this.user = data);
  }

}
