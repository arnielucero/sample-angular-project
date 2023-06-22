import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
    {
        path: '', component: AccountComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'forgotPassword', component: ForgotPasswordComponent },
            { path: 'signUp', component: SignUpComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }