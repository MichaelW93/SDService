import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {DatePipe} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatNoDataRow,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {HttpClient} from '@angular/common/http';
import {TblDocument} from '../../model/Document';

@Component({
  selector: 'app-document-view',
  imports: [
    DatePipe,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatSort,
    MatSortHeader,
    MatTable,
    MatHeaderCellDef,
    MatNoDataRow
  ],
  templateUrl: './document-view.html',
  styleUrl: './document-view.css',
})
export class DocumentView implements AfterViewInit {
  protected readonly httpClient: HttpClient = inject(HttpClient)
  protected readonly displayedColumns: string[] = [
    'idocumentPk',
    'sdocumentNo',
    'itypeFk',
    'dcreatedate',
    'sdescription',
    'sprojectname',
    'scustomerNo',
    'scustomername1',
    'susername',
  ];

  dataSource = new MatTableDataSource<TblDocument>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    console.log("call made")
    this.httpClient.get<TblDocument[]>('http://localhost:5000/api/v1/test').subscribe(
      res => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
      }
    )
  }
}
