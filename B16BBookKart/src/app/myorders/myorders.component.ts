import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Subject, takeUntil } from 'rxjs';

import { MyorderService } from '../myorder.service';
import { Order } from '../order';


@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('* <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class MyordersComponent implements OnInit,OnDestroy {
  displayedColumns: string[] = ['orderId', 'orderedOn', 'orderTotal'];
  dataSource = new MatTableDataSource<Order>();
  expandedElement: null | undefined;
  formGroup!: string;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {

    this.dataSource.paginator = mp;
  }
  userId:any;
  isLoading: boolean | undefined;
  
  private unsubscribe$ = new Subject<void>();

  constructor(private service: MyorderService) {
    this.userId = localStorage.getItem('userId');
  }
  ngOnInit(): void {
    
    this.isLoading = true;
    this.myOrderDetails();
  }
  myOrderDetails() {
    
    this.service.myOrderDetails(this.userId)
      .subscribe((result : Order[]) =>  {
        if (result != null) {
          this.dataSource.data = Object.values(result);
          this.isLoading = false;
        }
      }, error => {
        console.log('Error ocurred while fetching my order details : ', error);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}


