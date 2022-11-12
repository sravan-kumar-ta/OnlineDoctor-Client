import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TokenInterceptorService } from './services/interceptor/token-interceptor.service';
import { PtProfileComponent } from './components/patient/pt-profile/pt-profile.component';
import { PtUpdateUserComponent } from './components/patient/pt-update-user/pt-update-user.component';
import { PtBlogsComponent } from './components/patient/pt-blogs/pt-blogs.component';
import { PtBlogDetailComponent } from './components/patient/pt-blog-detail/pt-blog-detail.component';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@abacritt/angularx-social-login';
import { UserDetailsComponent } from './components/auth/user-details/user-details.component';
import { PtAppointmentComponent } from './components/patient/pt-appointment/pt-appointment.component';
import { PtAllAppointmentsComponent } from './components/patient/pt-all-appointments/pt-all-appointments.component';
import { DrProfileComponent } from './components/doctor/dr-profile/dr-profile.component';
import { DrUserupdateComponent } from './components/doctor/dr-userupdate/dr-userupdate.component';
import { DrDetailsaddComponent } from './components/doctor/dr-detailsadd/dr-detailsadd.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DrAppointmentsComponent } from './components/doctor/dr-appointments/dr-appointments.component';
import { DrBlogsComponent } from './components/doctor/dr-blogs/dr-blogs.component';
import { DrMyBlogsComponent } from './components/doctor/dr-my-blogs/dr-my-blogs.component';
import { DrAddBlogComponent } from './components/doctor/dr-add-blog/dr-add-blog.component';
import { DrBlogDetailComponent } from './components/doctor/dr-blog-detail/dr-blog-detail.component';
import { ChatComponent } from './components/chat/chat.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component'

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
    PtBlogsComponent,
    PtBlogDetailComponent,
    UserDetailsComponent,
    PtAppointmentComponent,
    PtAllAppointmentsComponent,
    DrProfileComponent,
    DrUserupdateComponent,
    DrDetailsaddComponent,
    PageNotFoundComponent,
    DrAppointmentsComponent,
    DrBlogsComponent,
    DrMyBlogsComponent,
    DrAddBlogComponent,
    DrBlogDetailComponent,
    ChatComponent,
    PasswordResetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1050376602770-de8rit49ij0pim0qfs1nj5cpj4mbuobn.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
