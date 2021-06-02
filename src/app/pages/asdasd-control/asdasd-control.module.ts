import { AsdasdFormModule } from './asdasd-form/asdasd-form.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsdasdControlComponent } from './asdasd-control.component';
import { AsdasdControlRoutingModule } from './asdasd-control-routing.module';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AsdasdControlComponent
  ],
  entryComponents: [AsdasdControlComponent],
  imports: [
    CommonModule,
    AsdasdControlRoutingModule,
    AsdasdFormModule,

    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [AsdasdControlComponent]
})
export class AsdasdControlModule { }
