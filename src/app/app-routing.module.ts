import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PtDoctorsComponent } from './components/patient/pt-doctors/pt-doctors.component';
import { PtHomeComponent } from './components/patient/pt-home/pt-home.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:PtHomeComponent, canActivate:[AuthGuard]},
  {path:'doctors/:id', component:PtDoctorsComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
