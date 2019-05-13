import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { Login2Component } from './components/login2/login2.component';
import { ChatComponent } from './components/chat/chat.component';
import { AddreimbursementComponent} from './components/addreimbursement/addreimbursement.component';
import { ViewticketsComponent} from './components/viewtickets/viewtickets.component';
import { Chat2Component } from './components/chat2/chat2.component';
import { ViewreimbursementsComponent} from './components/viewreimbursements/viewreimbursements.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { DeclinedComponent } from './components/declined/declined.component';
import { SubmittedComponent } from './components/submitted/submitted.component';

const routes: Routes = [
  {
    // localhost:4200/signup should render
    // the SignupComponent in the base
    // router-outlet
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {
    //     // localhost:4200/login/recover-password
    //     path: 'recover-password',
    //     component: PasswordRecoveryComponent
    //   }
    // ]
  }, {
    path: 'login2',
    component: Login2Component,
    // children: [
    //   {
    //     // localhost:4200/login/recover-password
    //     path: 'recover-password',
    //     component: PasswordRecoveryComponent
    //   }
    // ]
  }, {
    path: 'viewtickets',
    component: ViewticketsComponent,
    // children: [
    //   {
    //     // localhost:4200/login/recover-password
    //     path: 'recover-password',
    //     component: PasswordRecoveryComponent
    //   }
    // ]
  }, {
    path: 'addreimbursement',
    component: AddreimbursementComponent,
  }, {
    path: 'viewreimbursements',
    component: ViewreimbursementsComponent,
    // children: [
    //   {
    //     // localhost:4200/login/recover-password
    //     path: 'recover-password',
    //     component: PasswordRecoveryComponent
    //   }
    // ]
  }, {
    path: '',
    component: LoginComponent
  }, {
    path: 'chat',
    component: ChatComponent,
    children: [
      {
        path: 'addreimbursement',
        component: AddreimbursementComponent,
        children: [
          {
            path: 'submitted',
            component: SubmittedComponent
          }
        ]
      }, {
        path: 'viewtickets',
        component: ViewticketsComponent
      }
    ]
  }, {
    path: '',
    component: Login2Component
  }, {
    path: 'chat2',
    component: Chat2Component,
    children: [
      {
        path: 'viewreimbursements',
        component: ViewreimbursementsComponent,
        children: [
          {
            path: 'approved',
            component: ApprovedComponent
          }, {
            path: 'declined',
            component: DeclinedComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
