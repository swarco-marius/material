import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DataTableComponent } from './data-table/data-table.component';
import { DataRoutingModule } from './data.routing.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    HttpClientModule,
    DataRoutingModule
  ]
})
export class DataModule { }
