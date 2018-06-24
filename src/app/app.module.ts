import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountComponent } from './account/account.component';
import { NewReferralComponent } from './new-referral/new-referral.component';
import { SentReferralComponent } from './sent-referral/sent-referral.component';
import { ReceivedPhotosComponent } from './received-photos/received-photos.component';



const appRoutes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'Welcome', component: WelcomeComponent},
  { path: 'Account', component: AccountComponent},
  { path: 'NewReferral', component: NewReferralComponent},
  { path: 'SentReferral', component: SentReferralComponent},
  { path: 'ReceivedPhotos', component: ReceivedPhotosComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AccountComponent,
    WelcomeComponent,
    NewReferralComponent,
    SentReferralComponent,
    ReceivedPhotosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
