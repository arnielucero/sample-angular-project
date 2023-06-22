import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SystemIntegrationRoutingModule } from './system-integration-routing.module';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout.component';
import { DeleteComponent } from './delete/delete.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    DeleteComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SystemIntegrationRoutingModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule
  ]
})
export class SystemIntegrationModule { }
