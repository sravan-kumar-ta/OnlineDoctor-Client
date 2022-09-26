import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtNavbarComponent } from './components/patient/pt-navbar/pt-navbar.component';
import { DrNavbarComponent } from './components/doctor/dr-navbar/dr-navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PtHomeComponent } from './components/patient/pt-home/pt-home.component';
import { PtDoctorsComponent } from './components/patient/pt-doctors/pt-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    PtNavbarComponent,
    DrNavbarComponent,
    LoginComponent,
    RegisterComponent,
    PtHomeComponent,
    PtDoctorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
