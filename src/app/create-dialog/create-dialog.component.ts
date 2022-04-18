import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MerchantService } from '../merchant.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  merchantForm !: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  merchantCode = new FormControl('', Validators.required);
  fullName = new FormControl('', Validators.required);
  accounNumber = new FormControl('', Validators.required);
  constructor(
    private formBuilder: FormBuilder,
    private merchantService: MerchantService,
    private dialogRef: MatDialogRef<CreateDialogComponent>) { }

  ngOnInit(): void {
    this.merchantForm = this.formBuilder.group({
      merchantCode: ['', Validators.required],
      displayName: ['', Validators.nullValidator],
      fullName: ['', Validators.required],
      address: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      email: ['', Validators.required],
      merchantWebsite: ['', Validators.nullValidator],
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
