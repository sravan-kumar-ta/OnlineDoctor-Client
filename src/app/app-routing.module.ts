import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserDetailsComponent } from './components/auth/user-details/user-details.component';
import { ChatComponent } from './components/chat/chat.component';
import { DrNavbarComponent } from './components/doctor/dr-navbar/dr-navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PtNavbarComponent } from './components/patient/pt-navbar/pt-navbar.component';
import { doctorRoutes } from './routing/doctor-routing.module';
import { patientRoutes } from './routing/patient-routing.module';
import { DoctorGuard } from './services/guards/doctor.guard';
import { PatientGuard } from './services/guards/patient.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-user', component: UserDetailsComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'chat/:senderId/:receiverId', component: ChatComponent },
  { path: 'patient', component: PtNavbarComponent, children: patientRoutes, canActivate: [PatientGuard] },
  { path: 'doctor', component: DrNavbarComponent, children: doctorRoutes, canActivate: [DoctorGuard] },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
