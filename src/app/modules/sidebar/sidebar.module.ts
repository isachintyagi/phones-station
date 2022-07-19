import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
