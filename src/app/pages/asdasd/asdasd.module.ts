import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsdasdRoutingModule } from './asdasd-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsdasdComponent } from './asdasd.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';



@NgModule({
  declarations: [
    AsdasdComponent
  ],
  imports: [
    CommonModule,
    AsdasdRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    ClipboardModule,
    NgxMatSelectSearchModule
  ],
  exports: [AsdasdComponent]
})
export class AsdasdModule { }
