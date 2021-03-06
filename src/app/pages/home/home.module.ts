import { NavigationModule } from './../navigation/navigation.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    NavigationModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
