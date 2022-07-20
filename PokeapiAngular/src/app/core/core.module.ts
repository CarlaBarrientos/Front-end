import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/seaarch-bar.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { CoreRoutingModule } from './core-routing.module';

const materialModules = [
  MatButtonModule,
  MatToolbarModule
];
@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ...materialModules
  ],
  providers: [],
  exports: [
    HeaderComponent,
    SearchBarComponent
  ]
})
export class CoreModule { }
