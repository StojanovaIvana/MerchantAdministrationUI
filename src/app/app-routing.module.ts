import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantAdministrationComponent } from './merchantAdministration/merchantAdministration.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewStoreComponent } from './overviewStore/overviewStore.component';
import { UpdateStoreComponent } from './updateStore/updateStore.component';
const routes: Routes = [
  {
    path: 'merchants', component: MerchantsComponent
  },
  {
    path: 'merchants/:merchantCode', component: MerchantComponent
  },
  {
    path: 'merchants/:merchantCode', component: ConfirmationDialogComponent
  },
  {
    path: 'merchants/:merchantCode/stores', component: OverviewComponent
  },
  {
    path: 'merchants/:merchantCode/stores/:storeCode', component: UpdateStoreComponent
  },
  {
    path: ' merchants/:merchantCode/stores/:storeCode', component: ConfirmationDialogComponent
  },
  {
    path: 'merchants/:merchantCode/stores/:storeCode', component: UpdateStoreComponent
  },
  {
    path: 'merchants/:merchantCode/stores/:storeCode', component: OverviewStoreComponent
  },
  {
    path: 'merchantadministration', component: MerchantAdministrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
