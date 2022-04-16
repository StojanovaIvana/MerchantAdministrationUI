import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-overviewStore',
  templateUrl: './overviewStore.component.html',
  styleUrls: ['./overviewStore.component.scss']
})
export class OverviewStoreComponent implements OnInit {
  resivedRow: any;
  store: any;
  public storeCodeFormControl: FormControl = new FormControl({});
  public merchantCodeFormControl: FormControl = new FormControl({});
  public storeDisplayNameFormControl: FormControl = new FormControl({});
  public addressFormControl: FormControl = new FormControl({});
  public phoneNumberFormControl: FormControl = new FormControl({});
  public emailFormControl: FormControl = new FormControl({});

  constructor(
    private merchantService: MerchantService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<OverviewStoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { merchantCode: string, storeCode: string, storeDisplayName: string, address: string, phoneNumber: string, email: string },
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

  }


  public onClick(): void {
    this.dialogRef.close();
  }
}
