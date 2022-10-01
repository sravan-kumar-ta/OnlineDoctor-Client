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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/authentication/token-interceptor.service';
import { PtProfileComponent } from './components/patient/pt-profile/pt-profile.component';
import { PtUpdateUserComponent } from './components/patient/pt-update-user/pt-update-user.component';
import { PtUpdateMemberComponent } from './components/patient/pt-update-member/pt-update-member.component';
import { PtBlogsComponent } from './components/patient/pt-blogs/pt-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    PtNavbarComponent,
    DrNavbarComponent,
    LoginComponent,
    RegisterComponent,
    PtHomeComponent,
    PtDoctorsComponent,
    PtProfileComponent,
    PtUpdateUserComponent,
    PtUpdateMemberComponent,
    PtBlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
