import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-createStore-dialog',
  templateUrl: './createStore-dialog.component.html',
  styleUrls: ['./createStore-dialog.component.scss']
})
export class CreateStoreDialogComponent implements OnInit {
  storeForm !: FormGroup;
  storeCode = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private merchantService: MerchantService,
    private dialogRef: MatDialogRef<CreateStoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { merchantCode: string }) { }

  ngOnInit(): void {
    this.storeForm = this.formBuilder.group({
      storeCode: ['', Validators.required],
      merchantCode: this.data.merchantCode,
      storeDisplayName: ['', Validators.required],
      address: ['', Validators.nullValidator],
      phoneNumber: ['', Validators.nullValidator],
      email: ['', Validators.required]
    })
  }


  public createStore() {

    if (this.storeForm.valid) {

      this.merchantService.Merchants_Create(this.storeForm.value).subscribe({
        next: (res) => {
          alert("Store added succesfully");
          this.storeForm.reset();
          this.dialogRef.close();
        },
        error: () => {
          alert("error while adding store");
        }
      });
    }
  }
}

