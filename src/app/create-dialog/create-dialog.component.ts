import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MerchantService } from '../merchant.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  merchantForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private merchantService: MerchantService,
    private dialogRef: MatDialogRef<CreateDialogComponent>) { }

  ngOnInit(): void {
    this.merchantForm = this.formBuilder.group({
      merchantCode: ['', Validators.required],
      displayName: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      merchantWebsite: ['', Validators.required],
      accountNumber: ['', Validators.required]
    })
  }
 
  public createMerchant() {
    if (this.merchantForm.valid) {
      this.merchantService.Merchants_CreateMerchant(this.merchantForm.value).subscribe({
        next: (res) => {
          alert("Merchant added succesfully");
          this.merchantForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          alert("error while adding merchant");
        }
      })
    }
  }
}
