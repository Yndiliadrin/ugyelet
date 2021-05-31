import { OnHoverModule } from './../../shared/directives/on-hover/on-hover.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { IndexRoutingModule } from './index.-routing.module';
import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    MatFormFieldModule,
    OnHoverModule
  ],
  exports: [ IndexComponent ]
})
export class IndexModule { }
