import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MediaElement } from '../../../models/media.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ConfirmDialogComponent {

constructor(
  public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  @Inject(MAT_DIALOG_DATA)  public data: { id: string, url: string }

){}

onNoClick():void
{
  this.dialogRef.close(false)
}

onConfirm():void
{
  this.dialogRef.close(true)
}

}
