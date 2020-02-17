import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    SharedModule,
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
