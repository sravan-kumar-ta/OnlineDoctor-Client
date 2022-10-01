import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
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

  {
    path: 'patient',
    children: [
      {path:'home', component:PtHomeComponent},
      {path:'doctors/:id', component:PtDoctorsComponent},
      {path:'profile', component:PtProfileComponent},
      {path:'update-user', component:PtUpdateUserComponent},
      {path:'family-member/:id', component:PtUpdateMemberComponent},
      {path:'blogs', component:PtBlogsComponent},
    ], canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
