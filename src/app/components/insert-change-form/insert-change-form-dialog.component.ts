import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
}
  
@Component({
    selector: 'app-manual-upload-dialog',
    templateUrl: './insert-change-form-dialog.html',
    styleUrls: ['./insert-change-form.component.scss']
  })
  export class InsertChangeFormDialog {
    constructor(
      public dialogRef: MatDialogRef<InsertChangeFormDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }