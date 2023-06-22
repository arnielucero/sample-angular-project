import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from "../shared/material.module"; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AccountComponent } from './account.component';
@NgModule({
    imports: [
        CommonModule,
         
        ReactiveFormsModule,
        AccountRoutingModule,
        MatInputModule,
        MatCardModule,
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MaterialModule,
        MatSnackBarModule,
    ],
    declarations: [
        AccountComponent,
        LoginComponent
        
     
    ]

})
export class AccountModule { }