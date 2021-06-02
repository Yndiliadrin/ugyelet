import { AsdasdModel } from './../../shared/model/asdasd.model';
import { FbBaseService } from './../../service/fb-base.service';
import { AsdasdFormComponent } from './asdasd-form/asdasd-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-asdasd-control',
  templateUrl: './asdasd-control.component.html',
  styleUrls: ['./asdasd-control.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AsdasdControlComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  displayedColumns: string[] = ["category","text","aktual","actuality","actions"];
  dataSource!: MatTableDataSource<AsdasdModel>;

  constructor(
    private dialog: MatDialog,
    private service: FbBaseService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.service.get("asdasd").subscribe(result => {
      this.dataSource = new MatTableDataSource(result as AsdasdModel[]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AsdasdFormComponent, {
      width: '40%'
    });
    dialogRef.afterClosed().subscribe((result : AsdasdModel) => {
      if (result != undefined || result != null) {
        this.service.add('asdasd', result).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(row: AsdasdModel) {
    this.service.delete("asdasd",row.id);
  }

}
