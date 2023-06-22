import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SystemIntegrationService } from '../../services/system-integration.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private systemIntegrationService: SystemIntegrationService
  ) { }

  ngOnInit(): void {
  }

  confirmDelete() {
    this.systemIntegrationService.delete(this.data.id).subscribe(() => 
      this.dialogRef.close(this.data.id)
    )
  }
 
  confirmClose() {
    this.dialogRef.close()
  }

}
