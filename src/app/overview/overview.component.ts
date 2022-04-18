import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CreateStoreDialogComponent } from '../createStore-dialog/createStore-dialog.component';
import { MerchantService } from '../merchant.service';
import { OverviewStoreComponent } from '../overviewStore/overviewStore.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['storeCode', 'storeDisplayName', 'merchantCode', 'overviewAction', 'updateAction', 'deleteAction'];
  public store: any;
  public merchant: any;
  public merchantCode: any;
  public selectedRow: any;
  storeDisplayName: any

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private merchantService: MerchantService,
    private dialog: MatDialog,
    private _location: Location

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const merchantCode = params.merchantCode;
      this.merchantService.Merchants_GetStores(merchantCode).subscribe((store: any) => {
        this.store = store;
        this.dataSource.data = store;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      })

    })
    this.route.params.subscribe((params: any) => {
      const merchantCode = params.merchantCode;
      this.merchantService.Merchant_GetMerchant(merchantCode).subscribe((merchant) => {
        this.merchant = merchant;

      })
    })


  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public navigateToCreateStore() {
    const merchantCode=this.merchant.merchantCode;
    const dialogRef = this.dialog.open(CreateStoreDialogComponent, {
      width: '50%',
      data:{
        merchantCode:merchantCode,
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();

    });
  }

  public deleteStore(storeCode: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log('The dialog was closed');
        this.merchantService.Merchants_DeleteStore(storeCode).subscribe(() => {
          const indexOfObject = this.dataSource.data.findIndex((object: any) => {
            return object.storeCode === storeCode;
          });

         // console.log(indexOfObject); // 👉️ 1

          this.dataSource.data.splice(indexOfObject, 1);
          // console.log(this.dataSource.data);
          this.ngOnInit();
        });
      }
    });


  }
  public navigateToUpdateStore(merchantCode: string, storeCode: string) {
   
    this.router.navigate(['merchants/' + merchantCode + '/stores/' + storeCode]);
  }

  public navigateToDetails(merchantCode: string, storeCode: string, storeDisplayName: string, address: string, phoneNumber: string, email: string) {

    const dialogRef = this.dialog.open(OverviewStoreComponent, {
      width: '50%',
      data: {
        merchantCode: merchantCode,
        storeCode: storeCode,
        storeDisplayName: storeDisplayName,
        address: address,
        phoneNumber: phoneNumber,
        email: email
      }

    });

  }
  public back() {
    this._location.back();
  }
}
