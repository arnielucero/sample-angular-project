import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManualUploadDialog } from './manual-upload-dialog.component';

@Component({
  selector: 'app-manual-upload',
  templateUrl: './manual-upload.component.html',
  styleUrls: ['./manual-upload.component.scss']
})
export class ManualUploadComponent{

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ManualUploadDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
