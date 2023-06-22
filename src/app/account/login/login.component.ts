import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AlertService } from 'src/app/services';
import { first } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private accountService: AccountService,
    private alertService:AlertService,
    private _snackBar: MatSnackBar

    ) { }

  [x: string]: any;

  signin: FormGroup = new FormGroup({
    password: new FormControl(),
    username: new FormControl(),
    rememberMe: new FormControl(false)
  });

  hide = true;

  get usernameInput() { return this.signin.get('username'); }
  get passwordInput() { return this.signin.get('password'); }
  get rememberMe() { return this.signin.get('rememberMe'); }

  login(): void {
    console.log("login:")
    console.log("username",this.usernameInput?.value);
    console.log("password",this.passwordInput?.value, this.passwordInput?.valid)
    console.log("rememberMe",this.rememberMe?.value);

   
    this.accountService.login(this.usernameInput?.value,this.passwordInput?.value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                this.router.navigateByUrl(""); 
            },
            error: error => {
              console.log(error)
             // this._snackBar.open(error.error.message,"Closed",{duration:2000});
              this.alertService.clear()
              this.alertService.error(error.error.message,{autoClose:true, duration:2000});
             
            }
        });

  }
}
