import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockDetailRoutingModule } from './stock-detail-routing.module';
import { StockDetailComponent } from './stock-detail.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [StockDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    StockDetailRoutingModule,
    NgZorroAntdModule,
  ]
})
export class StockDetailModule { }
