import { AsdasdRoutingModule } from './asdasd-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsdasdComponent } from './asdasd.component';



@NgModule({
  declarations: [
    AsdasdComponent
  ],
  imports: [
    CommonModule,
    AsdasdRoutingModule
  ],
  exports: [AsdasdComponent]
})
export class AsdasdModule { }
