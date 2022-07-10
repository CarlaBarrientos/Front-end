import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/seaarch-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    SearchBarComponent
  ]
})
export class CoreModule { }
