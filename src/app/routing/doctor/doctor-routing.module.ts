import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrAddBlogComponent } from 'src/app/components/doctor/dr-add-blog/dr-add-blog.component';
import { DrAppointmentsComponent } from 'src/app/components/doctor/dr-appointments/dr-appointments.component';
import { DrBlogDetailComponent } from 'src/app/components/doctor/dr-blog-detail/dr-blog-detail.component';
import { DrBlogsComponent } from 'src/app/components/doctor/dr-blogs/dr-blogs.component';
import { DrDetailsaddComponent } from 'src/app/components/doctor/dr-detailsadd/dr-detailsadd.component';
import { DrMyBlogsComponent } from 'src/app/components/doctor/dr-my-blogs/dr-my-blogs.component';
import { DrProfileComponent } from 'src/app/components/doctor/dr-profile/dr-profile.component';
import { DrUserupdateComponent } from 'src/app/components/doctor/dr-userupdate/dr-userupdate.component';

export const doctorRoutes: Routes = [
  { path: 'profile', component: DrProfileComponent },
  { path: 'update-doctor', component: DrUserupdateComponent },
  { path: 'add-doctor-details', component: DrDetailsaddComponent },
  { path: 'appointments', component: DrAppointmentsComponent },
  { path: 'blogs', component: DrBlogsComponent },
  { path: 'my-blogs', component: DrMyBlogsComponent },
  { path: 'add-blog', component: DrAddBlogComponent },
  { path: 'blogs/:id', component: DrBlogDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(doctorRoutes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
