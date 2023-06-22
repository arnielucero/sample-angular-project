import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { fakeBackendProvider } from './helpers';
import { SelectSourceObject } from './components/select-source-object/select-source-object';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import {DialogModule} from '@angular/cdk/dialog';
import { ManualUploadComponent } from './components/manual-upload/manual-upload.component';
import { InsertChangeFormComponent } from './components/insert-change-form/insert-change-form.component';
import { SelectSourceDialog } from './components/select-source-object/select-source-dialog';
import { ManualUploadDialog } from './components/manual-upload/manual-upload-dialog.component';
import { InsertChangeFormDialog } from './components/insert-change-form/insert-change-form-dialog.component';
import { DataCaptureComponent } from './pages/data-capture/data-capture.component';
import { DataWarehouseComponent } from './pages/data-warehouse/data-warehouse.component';
import {MatMenuModule} from '@angular/material/menu';
import { MaterialModule } from "./shared/material.module"; 
import {MatTabsModule} from '@angular/material/tabs';
import { AlertComponent } from './components';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectSourceObject,
    ManualUploadComponent,
    InsertChangeFormComponent,
    SelectSourceDialog,
    ManualUploadDialog,
    InsertChangeFormDialog,
    DataCaptureComponent,
    DataWarehouseComponent,
    AlertComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    DialogModule,
    HttpClientModule,
    MaterialModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
