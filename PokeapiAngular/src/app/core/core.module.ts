import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/seaarch-bar.component';

@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [
    SearchBarComponent
  ]
})
export class CoreModule { }
