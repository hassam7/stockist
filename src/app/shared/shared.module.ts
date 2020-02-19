import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { StockCardComponent } from './stock-card/stock-card.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockGraphMiniComponent } from './stock-graph/stock-graph-mini/stock-graph-mini.component';

const COMPONENTS = [StockCardComponent, StockSearchComponent, StockGraphMiniComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule,
  ],
  exports: [
    ...COMPONENTS,
    NgZorroAntdModule,
  ]
})
export class SharedModule { }
