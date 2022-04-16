import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-createStore-dialog',
  templateUrl: './createStore-dialog.component.html',
  styleUrls: ['./createStore-dialog.component.scss']
})
export class CreateStoreDialogComponent implements OnInit {
  storeForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private merchantService: MerchantService,
    private dialogRef: MatDialogRef<CreateStoreDialogComponent>) { }

  ngOnInit(): void {
    this.storeForm = this.formBuilder.group({
      storeCode: ['', Validators.required],
      merchantCode: ['', Validators.required],
      storeDisplayName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
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

