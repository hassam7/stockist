import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockDetailRoutingModule } from './stock-detail-routing.module';
import { StockDetailComponent } from './stock-detail.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [StockDetailComponent],
  imports: [
    CommonModule,
    StockDetailRoutingModule,
    NgZorroAntdModule,
  ]
})
export class StockDetailModule { }
