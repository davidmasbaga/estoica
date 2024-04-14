import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutPageComponent } from './pages/main-layout-page/main-layout-page.component';
import { MediaComponent } from './pages/media/media.component';
import { DomainExtractorPipe } from '../pipes/domain.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MediaTableComponent } from './components/media-table/media-table.component';
import { SingleMediaComponent } from './pages/single-media/single-media.component'


@NgModule({
  declarations: [
    MainLayoutPageComponent,
    MediaComponent,
    DomainExtractorPipe,
    ConfirmDialogComponent,
    MediaTableComponent,
    SingleMediaComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatDialogModule

  ],
  exports:[
    DomainExtractorPipe
  ]

})
export class MainModule { }
