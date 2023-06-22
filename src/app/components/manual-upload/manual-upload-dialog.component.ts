import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
  }
  
@Component({
    selector: 'app-manual-upload-dialog',
    templateUrl: './manual-upload-dialog.html',
    styleUrls: ['./manual-upload.component.scss']
  })
  export class ManualUploadDialog {
    constructor(
      public dialogRef: MatDialogRef<ManualUploadDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }