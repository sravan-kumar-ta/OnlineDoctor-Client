import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtAllAppointmentsComponent } from 'src/app/components/patient/pt-all-appointments/pt-all-appointments.component';
import { PtAppointmentComponent } from 'src/app/components/patient/pt-appointment/pt-appointment.component';
import { PtBlogDetailComponent } from 'src/app/components/patient/pt-blog-detail/pt-blog-detail.component';
import { PtBlogsComponent } from 'src/app/components/patient/pt-blogs/pt-blogs.component';
import { PtDoctorsComponent } from 'src/app/components/patient/pt-doctors/pt-doctors.component';
import { PtHomeComponent } from 'src/app/components/patient/pt-home/pt-home.component';
import { PtProfileComponent } from 'src/app/components/patient/pt-profile/pt-profile.component';
import { PtUpdateMemberComponent } from 'src/app/components/patient/pt-update-member/pt-update-member.component';
import { PtUpdateUserComponent } from 'src/app/components/patient/pt-update-user/pt-update-user.component';

export const patientRoutes: Routes = [
  { path: 'home', component: PtHomeComponent },
  { path: 'profile', component: PtProfileComponent },
  { path: 'doctors/:id', component: PtDoctorsComponent },
  { path: 'update-user', component: PtUpdateUserComponent },
  { path: 'family-member/:id', component: PtUpdateMemberComponent },
  { path: 'blogs', component: PtBlogsComponent },
  { path: 'blogs/:id', component: PtBlogDetailComponent },
  { path: 'appointment/:id', component: PtAppointmentComponent },
  { path: 'appointments', component: PtAllAppointmentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(patientRoutes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
