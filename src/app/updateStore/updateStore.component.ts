import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateStore',
  templateUrl: './updateStore.component.html',
  styleUrls: ['./updateStore.component.scss']
})
export class UpdateStoreComponent implements OnInit {
  public storeCodeFormControl: FormControl = new FormControl({});
  public merchantCodeFormControl: FormControl = new FormControl({});
  public storeDisplayNameFormControl: FormControl = new FormControl({});
  public addressFormControl: FormControl = new FormControl({});
  public phoneNumberFormControl: FormControl = new FormControl({});
  public emailFormControl: FormControl = new FormControl({});
  public store: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private merchantService: MerchantService,
    private _location: Location) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const storeCode = params.storeCode;
      const merchantCode = params.merchantCode;
      this.merchantService.Merchants_GetStore(merchantCode, storeCode).subscribe((store) => {
        this.store = store;
        this.initFormControls();
      })
    })
  }
  public updateStore() {
    this.store.storeCode = this.storeCodeFormControl.value
    this.store.merchantCode = this.merchantCodeFormControl.value;
    this.store.storeDisplayName = this.storeDisplayNameFormControl.value;
    this.store.address = this.addressFormControl.value;
    this.store.phoneNumber = this.phoneNumberFormControl.value;
    this.store.email = this.emailFormControl.value;


    this.merchantService.Merchants_UpdateStore(this.store.storeCode, this.store).subscribe(() => {
      alert("Store updated succesfully");
      this._location.back();

    });

  }
  private initFormControls() {
    this.storeCodeFormControl = new FormControl({ value: this.store.storeCode, disabled: true });
    this.merchantCodeFormControl = new FormControl({ value: this.store.merchantCode, disabled: true })
    this.storeDisplayNameFormControl = new FormControl(this.store.storeDisplayName);
    this.addressFormControl = new FormControl(this.store.address);
    this.phoneNumberFormControl = new FormControl(this.store.phoneNumber);
    this.emailFormControl = new FormControl(this.store.email);
  }

  public backToList() {
    this._location.back();
  }
}
