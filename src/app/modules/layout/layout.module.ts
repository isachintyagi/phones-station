import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './component/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SidebarModule,
    ToolbarModule,
    FlexLayoutModule
  ]
})
export class LayoutModule { }
