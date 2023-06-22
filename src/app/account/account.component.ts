import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from '../services';



@Component({
     templateUrl: 'account.component.html'
     })
export class AccountComponent {
    constructor(
        private router: Router,
        private accountService: AccountService,
        private matIconRegistry: MatIconRegistry,
        private _domSanitizer: DomSanitizer
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }

        this.matIconRegistry.addSvgIcon("visible_off",  this._domSanitizer.bypassSecurityTrustResourceUrl("assets/image/vis_off.svg")); 
    }
}