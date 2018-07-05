import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

import { DataService } from '../data.service';
import { Table, Item } from '../models';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [DataService]
})
export class DataTableComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe((data: Table)  => {
        console.log(data);

        const ELEMENT = data.tableData;
        this.dataSource = new MatTableDataSource(ELEMENT);
        this.displayedColumns = ['id', 'name', 'description', 'date'];

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error => {
        console.error(error);
        alert(error);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
