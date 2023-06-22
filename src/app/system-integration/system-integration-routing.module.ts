import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataWarehouseComponent } from '../pages/data-warehouse/data-warehouse.component';
import { AddEditComponent } from './add-edit/add-edit.component';

import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',component: DataWarehouseComponent,
    children: [
        { path: 'system-integration', component: ListComponent },
        { path: 'system-integration/add', component: AddEditComponent },
        { path: 'system-integration/edit/:id', component: AddEditComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemIntegrationRoutingModule { }

