import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { SelectSourceDialog } from './select-source-dialog';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss']
})
export class SelectSourceObject {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SelectSourceDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

