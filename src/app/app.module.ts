import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MerchantComponent } from './merchant/merchant.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { OverviewComponent } from './overview/overview.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CreateStoreDialogComponent } from './createStore-dialog/createStore-dialog.component';
import { UpdateStoreComponent } from './updateStore/updateStore.component';
import { OverviewStoreComponent } from './overviewStore/overviewStore.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [							
    AppComponent,
    MerchantsComponent,
    MerchantComponent,
      ConfirmationDialogComponent,
      CreateDialogComponent,
      OverviewComponent,
      CreateStoreDialogComponent,
      UpdateStoreComponent,
      OverviewStoreComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule
   
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
