import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DutyRoutingModule } from './duty-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DutyComponent } from './duty.component';



@NgModule({
  declarations: [
    DutyComponent
  ],
  imports: [
    CommonModule,
    DutyRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [DutyComponent]
})
export class DutyModule { }
