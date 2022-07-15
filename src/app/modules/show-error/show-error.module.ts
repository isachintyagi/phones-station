import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorComponent } from './show-error/show-error.component';



@NgModule({
  declarations: [
    ShowErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ShowErrorComponent]
})
export class ShowErrorModule { }
