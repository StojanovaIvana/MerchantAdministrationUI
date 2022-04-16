import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog'; import { MerchantService } from '../merchant.service';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
    private merchantService: MerchantService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>


  ) { }

  ngOnInit() {
  }

  public onClick(): void {
    this.dialogRef.close(true);
  }
}