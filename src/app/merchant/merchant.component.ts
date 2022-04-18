import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  public merchantCodeFormControl: FormControl = new FormControl({});
  public displayNameFormControl: FormControl = new FormControl({});
  public fullNameFormControl: FormControl = new FormControl({});
  public addressFormControl: FormControl = new FormControl({});
  public phoneNumberFormControl: FormControl = new FormControl({});
  public emailFormControl: FormControl = new FormControl({});
  public merchantWebsiteFormControl: FormControl = new FormControl({});
  public accountNumberFormControl: FormControl = new FormControl({});
  public merchant: any;;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private merchantService: MerchantService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const merchantCode = params.merchantCode;
      this.merchantService.Merchant_GetMerchant(merchantCode).subscribe((merchant) => {
        this.merchant = merchant;
        this.initFormControls();
      })

    })
  }

  public updateMerchant() {
  
    this.merchant.merchantCode = this.merchantCodeFormControl.value;
    this.merchant.displayName = this.displayNameFormControl.value;
    this.merchant.fullName = this.displayNameFormControl.value;
    this.merchant.address = this.addressFormControl.value;
    this.merchant.phoneNumber = this.phoneNumberFormControl.value;
    this.merchant.email = this.emailFormControl.value;
    this.merchant.merchantWebsite = this.merchantWebsiteFormControl.value;
    this.merchant.accountNumber = this.accountNumberFormControl.value;

    this.merchantService.Merchant_UpdateMerchant(this.merchant.merchantCode, this.merchant).subscribe(() => {
      alert("Merchant updated successfully");
      this._location.back();


    });
  
  }
  public backToList() {
    this.router.navigate(['merchants']);
  }
  private initFormControls() {
    this.merchantCodeFormControl = new FormControl({ value: this.merchant.merchantCode, disabled: true })
    this.displayNameFormControl = new FormControl(this.merchant.displayName);
    this.fullNameFormControl = new FormControl(this.merchant.fullName);
    this.addressFormControl = new FormControl(this.merchant.address);
    this.phoneNumberFormControl = new FormControl(this.merchant.phoneNumber);
    this.emailFormControl = new FormControl(this.merchant.email);
    this.merchantWebsiteFormControl = new FormControl(this.merchant.merchantWebsite);
    this.accountNumberFormControl = new FormControl(this.merchant.accountNumber);
  }

}
