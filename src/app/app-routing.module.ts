import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './helpers';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataCaptureComponent } from './pages/data-capture/data-capture.component';
import { DataWarehouseComponent } from './pages/data-warehouse/data-warehouse.component';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const systemIntegrationModule = () => import('./system-integration/system-integration.module').then(x => x.SystemIntegrationModule);

const routes: Routes = [
   { path: 'account', loadChildren: accountModule },
   { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  {path:'data-warehouse', loadChildren: systemIntegrationModule, canActivate:[AuthGuard] },
  {path:'data-warehouse/data-capture', component: DataCaptureComponent, canActivate:[AuthGuard] },
  {path:'**', redirectTo:'/dashboard'},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
