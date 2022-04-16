import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(
    private http: HttpClient
  ) { }

  public getMerchants() {
    return this.http.get("https://localhost:44373/api/merchants");
  }

  public Merchant_GetMerchant(merchantCode: string) {
    return this.http.get("https://localhost:44373/api/merchants/" + merchantCode);

  }
  public Merchants_CreateMerchant(data: any) {
    return this.http.post("https://localhost:44373/api/merchants", data);
  }

  public Merchant_UpdateMerchant(merchantCode: string, body: any) {
    return this.http.put("https://localhost:44373/api/merchants/" + merchantCode, body);

  }

  public Merchants_DeleteMerchant(merchantCode: string) {
    return this.http.delete("https://localhost:44373/api/merchants/" + merchantCode);

  }

  public Merchants_GetStores(merchantCode: string) {
    return this.http.get("https://localhost:44373/api/merchants/" + merchantCode + "/stores");
  }

  public Merchants_Create(data: any) {
    return this.http.post("https://localhost:44373/api/merchants/:merchantCode/stores", data);
  }

  
  public Merchants_GetStore(merchantCode:string, storeCode: string) {
    return this.http.get('https://localhost:44373/api/merchants/'+merchantCode+'/stores/' + storeCode);
  }

  public Merchants_UpdateStore(storeCode: string, body: any) {
    return this.http.put('https://localhost:44373/api/merchants/:merchantCode/stores/' + storeCode, body);
  }

  public Merchants_DeleteStore(storeCode: string) {
    return this.http.delete("https://localhost:44373/api/merchants/:merchantCode/stores/" + storeCode);
  }
}
