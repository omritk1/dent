import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewReferralComponent } from './new-referral/new-referral.component';
import { SentReferralComponent } from './sent-referral/sent-referral.component';
import { ReceivedPhotosComponent } from './received-photos/received-photos.component';


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
    ReceivedPhotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
