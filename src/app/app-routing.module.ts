import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

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
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
