import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiManagementService } from '../../../services/api-management.service';
import { MediaElement } from '../../../models/media.interface';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-media-table',
  templateUrl: './media-table.component.html',
  styleUrl: './media-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MediaTableComponent implements  OnDestroy, OnInit{

  public mediaElements?: MediaElement[]
   private destroy$:Subject<void> = new Subject<void>()
 apiManagementService: any;

 constructor(
   public mediaService: ApiService,
   private cdr: ChangeDetectorRef,
   private dialog:MatDialog,
   public apiManagement: ApiManagementService)

   {

 }
   ngOnInit(): void {
     this.apiManagement.getMedia()
     this.getMedia()
   }

   ngOnDestroy(): void {
     this.destroy$.next();
     this.destroy$.complete()
   }


   getMedia() {
     this.apiManagement.media$.pipe(takeUntil(this.destroy$)).subscribe((response: MediaElement[]) => {

       this.mediaElements = response;
       this.cdr.detectChanges();
       this.cdr.markForCheck();

     });
   }


   onDelete(id: string, url: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: id, url: url }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (!res) return;

      this.mediaService.deleteData(id).subscribe(wasDeleted => {
        if (wasDeleted) {
          this.apiManagement.getMedia();
          this.cdr.markForCheck(); 
        }
      });
    });
  }




}
