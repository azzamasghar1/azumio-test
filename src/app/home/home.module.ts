import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDirectiveModule } from './../shared/select-directive/select.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SelectDirectiveModule,
    HomeRoutingModule
  ]
})
export class HomeComponentModule { }
