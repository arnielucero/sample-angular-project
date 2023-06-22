import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InsertChangeFormDialog } from './insert-change-form-dialog.component';

@Component({
  selector: 'app-insert-change-form',
  templateUrl: './insert-change-form.component.html',
  styleUrls: ['./insert-change-form.component.scss']
})
export class InsertChangeFormComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InsertChangeFormDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
