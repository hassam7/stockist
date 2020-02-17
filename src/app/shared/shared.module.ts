import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StockCardComponent, StockSearchComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  exports: [
    StockCardComponent,
    StockSearchComponent
  ]
})
export class SharedModule { }
