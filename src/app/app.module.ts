import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { SignupService } from './services/signup.service';
import { FormsModule } from '@angular/forms';
import { TrimPipePipe } from './pipes/trim-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Login2Component } from './components/login2/login2.component';
import { ViewticketsComponent } from './components/viewtickets/viewtickets.component';
import { AddreimbursementComponent } from './components/addreimbursement/addreimbursement.component';
import { Chat2Component } from './components/chat2/chat2.component';
import { ViewreimbursementsComponent } from './components/viewreimbursements/viewreimbursements.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { DeclinedComponent } from './components/declined/declined.component';
import { SubmittedComponent } from './components/submitted/submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ChatComponent,
    TrimPipePipe,
    Login2Component,
    ViewticketsComponent,
    AddreimbursementComponent,
    Chat2Component,
    ViewreimbursementsComponent,
    ApprovedComponent,
    DeclinedComponent,
    SubmittedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
