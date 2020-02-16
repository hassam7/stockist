import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StockCardComponent } from './stock-card/stock-card.component';



@NgModule({
  declarations: [StockCardComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [
    StockCardComponent
  ]
})
export class SharedModule { }
