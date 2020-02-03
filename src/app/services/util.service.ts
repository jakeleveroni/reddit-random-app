import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingDialogComponent } from '../components/loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private dialogRef: MatDialogRef<any> = null;

  constructor(public dialog: MatDialog) { }

  public openDialog(): void {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      width: '250px',
      height: '250px',
      disableClose: true
    });
  }

  public closeDialog(): void {
    if (this.dialogRef !== null) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}
