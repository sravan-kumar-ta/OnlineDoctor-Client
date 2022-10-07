import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserDetailsComponent } from './components/auth/user-details/user-details.component';
import { DrDetailsaddComponent } from './components/doctor/dr-detailsadd/dr-detailsadd.component';
import { DrProfileComponent } from './components/doctor/dr-profile/dr-profile.component';
import { DrUserupdateComponent } from './components/doctor/dr-userupdate/dr-userupdate.component';
import { PtAllAppointmentsComponent } from './components/patient/pt-all-appointments/pt-all-appointments.component';
import { PtAppointmentComponent } from './components/patient/pt-appointment/pt-appointment.component';
import { PtBlogDetailComponent } from './components/patient/pt-blog-detail/pt-blog-detail.component';
import { PtBlogsComponent } from './components/patient/pt-blogs/pt-blogs.component';
import { PtDoctorsComponent } from './components/patient/pt-doctors/pt-doctors.component';
import { PtHomeComponent } from './components/patient/pt-home/pt-home.component';
import { PtProfileComponent } from './components/patient/pt-profile/pt-profile.component';
import { PtUpdateMemberComponent } from './components/patient/pt-update-member/pt-update-member.component';
import { PtUpdateUserComponent } from './components/patient/pt-update-user/pt-update-user.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'new-user', component:UserDetailsComponent},

  {
    path: 'patient',
    children: [
      {path:'home', component:PtHomeComponent},
      {path:'doctors/:id', component:PtDoctorsComponent},
      {path:'profile', component:PtProfileComponent},
      {path:'update-user', component:PtUpdateUserComponent},
      {path:'family-member/:id', component:PtUpdateMemberComponent},
      {path:'blogs', component:PtBlogsComponent},
      {path:'blogs/:id', component:PtBlogDetailComponent},
      {path:'appointment/:id', component:PtAppointmentComponent},
      {path:'appointments', component:PtAllAppointmentsComponent},
    ], canActivate: [AuthGuard]
  },
  {
    path: 'doctor',
    children: [
      {path:'profile', component:DrProfileComponent},
      {path:'update-doctor', component:DrUserupdateComponent},
      {path:'add-doctor-details', component:DrDetailsaddComponent},
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
