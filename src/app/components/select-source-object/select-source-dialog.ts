import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
  }
  
@Component({
    selector: 'app-dialog',
    templateUrl: './select-source-dialog.html',
    styleUrls: ['./csv-upload.component.scss']
  })
  export class SelectSourceDialog {
    constructor(
      public dialogRef: MatDialogRef<SelectSourceDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }