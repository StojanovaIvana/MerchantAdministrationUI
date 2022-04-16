import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Location } from '@angular/common';



@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss']
})
export class MerchantsComponent implements OnInit {
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['merchantCode', 'displayName', 'fullName', 'overviewAction', 'updateAction', 'deleteAction'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private merchantService: MerchantService,
    private router: Router,
    private dialog: MatDialog,
    private _location: Location
  ) { }


  ngOnInit(): void {
    this.merchantService.getMerchants().subscribe((results: any) => {
      this.dataSource.data = results.merchants;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public navigateToUpdate(merchantCode: string) {
    this.router.navigate(['merchants/' + merchantCode]);
  }

  public navigateToDetails(merchantCode: string) {
    this.router.navigate(['merchants/' + merchantCode + '/stores']);

  }

  public navigateToCreate() {

    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();

    });
  }

  public deleteMerchant(merchantCode: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.merchantService.Merchants_DeleteMerchant(merchantCode).subscribe(() => {
          const indexOfObject = this.dataSource.data.findIndex((object: any) => {
            return object.merchantCode === merchantCode;
          });

          //  console.log(indexOfObject); // 👉️ 1

          this.dataSource.data.splice(indexOfObject, 1);
          // console.log(this.dataSource.data);
          this.ngOnInit();
        })
      }
    });

  }
  public back() {
    this._location.back();
  }

}
