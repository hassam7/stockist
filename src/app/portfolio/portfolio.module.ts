import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioRoutingModule, NgZorroAntdModule]
})
export class PortfolioModule {}
