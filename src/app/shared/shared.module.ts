import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { FormsModule } from '@angular/forms';
import { StockGraphMiniComponent } from './stock-graph/stock-graph-mini/stock-graph-mini.component';



@NgModule({
  declarations: [StockCardComponent, StockSearchComponent, StockGraphMiniComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  exports: [
    StockCardComponent,
    StockSearchComponent,
    StockGraphMiniComponent,
    NgZorroAntdModule,
  ]
})
export class SharedModule { }
