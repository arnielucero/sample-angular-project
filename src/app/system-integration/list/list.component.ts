import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { SystemIntegrationService, AlertService } from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  systemIntegration? : any = [];
  isLoading: boolean = true;
  displayedColumns: string[] = [
    'id',
    'accountName',
    'status',
    'actions',
  ];

  constructor(
    private systemIntegrationService: SystemIntegrationService, 
    public dialog: MatDialog,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAll();
      },300);
  }

  getAll() {
    this.isLoading = false;
    this.systemIntegrationService.getAll()
    .pipe(first())
    .subscribe(systemIntegration => {
      this.systemIntegration = systemIntegration;
    })
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '500px',
      data: { id },
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.alertService.success('Item was successfully deleted', { keepAfterRouteChange: true, autoClose: true });
      }
      this.getAll();
    })
  }

  testConnection(id: number) {
    this.alertService.success('Connection Successful', { keepAfterRouteChange: true, autoClose: true });
  }
}
